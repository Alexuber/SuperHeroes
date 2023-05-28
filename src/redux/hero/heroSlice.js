import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import * as heroesService from './hero-operations';

const initialHeroesState = {
  heroes: [],
  currentHero: {},
  isLoading: false,
  error: null,
  status: 'idle',
};

const heroSlice = createSlice({
  name: 'heroes',
  initialState: initialHeroesState,
  extraReducers: builder => {
    builder
      .addCase(heroesService.getHeroes.fulfilled, (state, { payload }) => {
        state.heroes = payload;
      })
      .addCase(heroesService.findHeroById.fulfilled, (state, { payload }) => {
        state.currentHero = payload;
      })
      .addCase(heroesService.addHero.fulfilled, (state, { payload }) => {
        state.heroes = [payload, ...state.heroes];
      })
      .addCase(heroesService.changeHeroById.fulfilled, (state, { payload }) => {
        const heroIndex = state.heroes.findIndex(
          hero => hero._id === payload._id
        );
        if (heroIndex !== -1) {
          state.heroes[heroIndex] = payload;
        }
      })
      .addCase(heroesService.removeHero.fulfilled, (state, { payload }) => {
        state.heroes = state.heroes.filter(hero => hero._id !== payload);
      })
      .addCase(heroesService.removeImgById.fulfilled, (state, { payload }) => {
        const { id, selectedImage } = payload;

        state.heroes = state.heroes.map(hero => {
          if (hero._id === id) {
            return {
              ...hero,
              images: hero.images.filter(img => {
                return img !== selectedImage;
              }),
            };
          }
          return hero;
        });
      })

      .addMatcher(isAnyOf(...getActions('pending')), pendingHandler)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledHandler)
      .addMatcher(isAnyOf(...getActions('rejected')), errorHandler);
  },
});

function pendingHandler(state) {
  state.status = 'pending';
  state.isLoading = true;
  state.error = null;
}
function fulfilledHandler(state) {
  state.status = 'fulfilled';
  state.isLoading = false;
}

function errorHandler(state, { payload }) {
  state.status = 'rejected';
  state.isLoading = false;
  state.error = payload;
}

const extraActions = [
  heroesService.getHeroes,
  heroesService.findHeroById,
  heroesService.addHero,
  heroesService.changeHeroById,
  heroesService.removeHero,
];

const getActions = type => extraActions.map(action => action[type]);

export const heroesReducer = heroSlice.reducer;
