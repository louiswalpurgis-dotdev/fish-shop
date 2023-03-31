import * as actionType from './actionType';

export const buyProduct = (product) => {
    return {
        type: actionType.BUY_PRODUCT,
        payload: product,
    };
};

export const deleteProduct = (product) => {
    return {
        type: actionType.DELETE_PRODUCT,
        payload: product,
    };
};

export const addUser = (user) => {
    return {
        type: actionType.ADD_USER,
        payload: user,
    };
};
export const deleteUser = (user) => {
    return {
        type: actionType.DELETE_USER,
        payload: user,
    };
};
