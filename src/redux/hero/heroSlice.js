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
      // -------- getHeroes ---------
      .addCase(heroesService.getHeroes.fulfilled, (state, { payload }) => {
        console.log('🆑  payload:', payload);

        state.heroes = payload;
      })

      // ------- findHeroById -------
      .addCase(heroesService.findHeroById.fulfilled, (state, { payload }) => {
        state.currentHero = payload;
      })

      // ------- addHero -------
      .addCase(heroesService.addHero.fulfilled, (state, { payload }) => {
        console.log('🆑  payload:', payload);

        state.heroes = [payload, ...state.heroes];
      })

      // ------- changeHeroById -------
      .addCase(heroesService.changeHeroById.fulfilled, (state, { payload }) => {
        state.heroes = state.heroes.map(results =>
          results.id === payload.response.id ? payload.response : results
        );
      })

      // ------- removeHero -------
      .addCase(heroesService.removeHero.fulfilled, (state, { payload }) => {
        state.heroes = state.heroes.filter(game => game.id !== payload);
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

// export const {
//   clearGames,
//   clearCurrentGame,
//   clearAllQuestions,
//   clearGameQuestions,
// } = quizSlice.actions;
export const heroesReducer = heroSlice.reducer;
