export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const TOGGLE_LIGHT_MODE = 'TOGGLE_LIGHT_MODE';
export const SET_CARD_CLICKED = 'SET_CARD_CLICKED';

export const toggleDarkMode = () => {
    return {
        type: TOGGLE_DARK_MODE
    };
};

export const toggleLightMode = () => {
    return {
        type: TOGGLE_LIGHT_MODE
    };
};

export const setIfLogin = isLoggedIn => {
    return {
        type: "SET_IF_LOGIN",
        payload: isLoggedIn
    };
};

export const setFilteredGames = games => {
    return {
        type: "FILTEREDGAMES",
        payload: games
    };
};

export const setCardClicked = (card) => {
    return {
        type: SET_CARD_CLICKED,
        card
    };
};