export const selectIsLoading = state => state.heroesData.isLoading;
export const selectError = state => state.heroesData.error;

export const selectAllHeroes = state => state.heroesData.heroes;
export const selectCurrentHero = state => state.heroesData.currentHero;
export const selectHeroById = (state, heroId) => {
  const allHeroes = selectAllHeroes(state);
  return allHeroes.find(hero => hero._id === heroId) || null;
};
