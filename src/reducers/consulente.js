import {
    DATA_FAIL,
    DATA_RECEIVED,
    SET_MESSAGE
} from "../actions/types";
const user = JSON.parse(localStorage.getItem("user"));
const initialState =  { consulente: null, message: "" };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case DATA_RECEIVED:
            return {
                ...state,
                consulente: payload,
            };
        case DATA_FAIL:
            return {
                ...state,
                consulente: payload,
                message: payload.message,
            };

        default:
            return state;
    }
}