import { TOGGLE_DARK_MODE, TOGGLE_LIGHT_MODE } from './actions';

const initialState = {
    isDarkMode: false,
};

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: true,
            };
        case TOGGLE_LIGHT_MODE:
            return {
                ...state,
                isDarkMode: false,
            };

        case "SET_IF_LOGIN":
            return {
                ...state,
                ifLogin: action.payload
            };
            
        default:
            return state;
    }
}
