import * as actionType from '~/action/actionType';

const initialState = {
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_USER:
            return {
                user: action.payload,
            };
        case actionType.DELETE_USER:
            return {};
        default:
            return state;
    }
};

export default userReducer;
