import { combineReducers, configureStore } from "@reduxjs/toolkit";
import subredditsReducer from '../components/Subreddit/SubredditSlice'

export const store = configureStore(
    reducer: combineReducers({
        subreddits: subredditsReducer,
        reddits: redditsReducer
    })
)