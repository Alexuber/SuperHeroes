// import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// import * as quizService from './quiz-operations';

// const initialQuizState = {
//   games: [],
//   currentGame: null,
//   allQuestions: [],
//   gameQuestions: [], // питання поточної гри
//   quizResults: [],
//   isLoading: false,
//   error: null,
//   status: 'idle',
// };

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState: initialQuizState,
//   reducers: {
//     clearGames: state => {
//       state.games = [];
//     },

//     clearCurrentGame: state => {
//       state.currentGame = null;
//     },

//     clearAllQuestions: state => {
//       state.allQuestions = [];
//     },

//     clearGameQuestions: state => {
//       state.gameQuestions = [];
//     },
//   },

//   extraReducers: builder => {
//     builder

//       //////////////////// GAMES ////////////////////

//       // -------- getGames ---------
//       .addCase(quizService.getGames.fulfilled, (state, { payload }) => {
//         state.games = payload;
//       })

//       // ------- fetchGameById -------
//       .addCase(quizService.fetchGameById.fulfilled, (state, { payload }) => {
//         state.currentGame = payload;
//       })

//       // ------- postGame -------
//       .addCase(quizService.postGame.fulfilled, (state, { payload }) => {
//         state.games = [payload, ...state.games];
//       })

//       // ------- changeGame -------
//       .addCase(quizService.changeGame.fulfilled, (state, { payload }) => {
//         state.games = state.games.map(results =>
//           results.id === payload.response.id ? payload.response : results
//         );
//       })

//       // ------- removeGame -------
//       .addCase(quizService.removeGame.fulfilled, (state, { payload }) => {
//         state.games = state.games.filter(game => game.id !== payload);
//       })

//       ////////////////// QUESTIONS //////////////////

//       // -------- getQuestions ---------
//       .addCase(quizService.getQuestions.fulfilled, (state, { payload }) => {
//         state.allQuestions = payload;
//       })

//       // ------- fetchQuestionsById -------
//       .addCase(
//         quizService.fetchQuestionById.fulfilled,
//         (state, { payload }) => {
//           state.gameQuestions = [payload, ...state.gameQuestions];
//         }
//       )

//       // ------- postQuestion -------
//       .addCase(quizService.postQuestion.fulfilled, (state, { payload }) => {
//         state.allQuestions.push(payload);
//       })

//       // ------- changeQuestion -------
//       .addCase(quizService.changeQuestion.fulfilled, (state, { payload }) => {
//         const filtered = state.allQuestions.filter(
//           ({ id }) => payload.id !== id
//         );
//         filtered.push(payload);
//         state.allQuestions = filtered;
//       })

//       // ------- removeQuestion -------
//       .addCase(quizService.removeQuestion.fulfilled, (state, { payload }) => {
//         state.allQuestions = state.allQuestions.filter(
//           ({ id }) => id !== payload
//         );
//       }) ////////////////// QUIZRESULTS //////////////////

//       // -------- getResultsQuiz ---------
//       .addCase(quizService.getResultsQuiz.fulfilled, (state, { payload }) => {
//         state.quizResults = payload;
//       })

//       // ------- fetchResultQuizById -------
//       .addCase(
//         quizService.fetchResultQuizById.fulfilled,
//         (state, { payload }) => {
//           state.gameQuestions = [payload, ...state.gameQuestions];
//         }
//       )

//       // ------- postQuestion -------
//       .addCase(quizService.addResultQuiz.fulfilled, (state, { payload }) => {
//         state.allQuestions.push(payload);
//       })

//       // ------- changeQuestion -------
//       .addCase(quizService.changeResultQuiz.fulfilled, (state, { payload }) => {
//         const filtered = state.allQuestions.filter(
//           ({ id }) => payload.id !== id
//         );
//         filtered.push(payload);
//         state.allQuestions = filtered;
//       })

//       // ------- removeQuestion -------
//       .addCase(quizService.removeResultQuiz.fulfilled, (state, { payload }) => {
//         state.allQuestions = state.allQuestions.filter(
//           ({ id }) => id !== payload
//         );
//       })

//       .addMatcher(isAnyOf(...getActions('pending')), pendingHandler)
//       .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledHandler)
//       .addMatcher(isAnyOf(...getActions('rejected')), errorHandler);
//   },
// });

// function pendingHandler(state) {
//   state.status = 'pending';
//   state.isLoading = true;
//   state.error = null;
// }
// function fulfilledHandler(state) {
//   state.status = 'fulfilled';
//   state.isLoading = false;
// }

// function errorHandler(state, { payload }) {
//   state.status = 'rejected';
//   state.isLoading = false;
//   state.error = payload;
// }

// const extraActions = [
//   quizService.getGames,
//   quizService.fetchGameById,
//   quizService.postGame,
//   quizService.changeGame,
//   quizService.removeGame,
//   quizService.getQuestions,
//   quizService.fetchQuestionById,
//   quizService.postQuestion,
//   quizService.changeQuestion,
//   quizService.removeQuestion,
// ];

// const getActions = type => extraActions.map(action => action[type]);

// export const {
//   clearGames,
//   clearCurrentGame,
//   clearAllQuestions,
//   clearGameQuestions,
// } = quizSlice.actions;
// export const quizReducer = quizSlice.reducer;
