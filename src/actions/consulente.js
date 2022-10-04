import {
    DATA_FAIL,
    DATA_RECEIVED,
    SET_MESSAGE
} from "./types";
import ConsulenteService from "../services/consulente-service";

export const getConsulenteData = (username) => (dispatch) => {
    return ConsulenteService.getConsulenteData(username).then(
        (response) => {
            dispatch({
                type: DATA_RECEIVED,
                payload: response.data,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: DATA_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};