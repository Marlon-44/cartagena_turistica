import { createContext, useContext } from "react";

export const ReviewsContext = createContext();

export const useReviews = ()=> useContext(ReviewsContext);