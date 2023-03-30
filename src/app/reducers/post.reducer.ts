import { ActionReducer } from "@ngrx/store"
import * as PostActions from "../actions/post.actions"
import { Post } from "../models/post.model"

export type Action = PostActions.All

// Initial App State

const defaultState: Post = {
    text: "Nothing to see here",
    likes: 0
}

// Helper function to create a new state object
const newState = (
    state: any,
    newData: { text: string } | { likes: number }

) => {
    return Object.assign({}, state, newData)
}

// Reducer function
export const postReducer = (state: Post = defaultState, action: any) => {
    console.log("=====> action.type state from postReducer", action.type, state)
    
    switch (action.type) {
        case PostActions.EDIT_TEXTS:
            return newState(state, { text: action.payload })
        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 })
        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1 })
        case PostActions.RESET:
            return defaultState
    }
}