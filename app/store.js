import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "@/reducers/QuizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
