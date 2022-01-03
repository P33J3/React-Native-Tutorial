import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            alert(JSON.stringify(action.payload))
            //rating,author and text is not being pulled in and I am not sure why.
            // new commeent object works otherwise
            //also not sure how to add new comment to array when update within the return below.
            const comment = action.payload;
            comment.id = state.comments.length;
            return {...state, comments: state.comments.concat(comment)};
           

        default:
            return state;
    }
};