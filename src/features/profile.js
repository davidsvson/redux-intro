import { createAction } from "@reduxjs/toolkit";

const changeAlias = createAction('change Alias');
const changeName = createAction('change name');
const resetProfile = createAction('reset profile');

const actions = {changeAlias, changeName, resetProfile };

const initialState = {
    alias : '',
    name : ''
}

const reducer = createReducer(initialState, {
    [changeAlias] : (state, action) => (
        {
            alias : action.payload,
            name : state.name            
        }
    ),
    [changeName] : (state, action) => (
        {...state, name: action.payload}
    ),
    [resetProfile] : (state, action) => (
        initialState
    )
})

export { actions, reducer};