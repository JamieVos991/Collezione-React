import { TOGGLE_DARK_MODE, TOGGLE_LIGHT_MODE, SET_CARD_CLICKED } from './actions';

const initialState = {
    isDarkMode: false,
    filteredGames: [],
    cardClicked: {}
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
        case "FILTEREDGAMES":
            return {
                ...state,
                filteredGames: action.payload
            };
        case SET_CARD_CLICKED:
            return {
                ...state,
                cardClicked: action.card
            };
        default:
            return state;
    }
}
