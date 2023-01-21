export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const TOGGLE_LIGHT_MODE = "TOGGLE_LIGHT_MODE";

export const toggleDarkMode = () => ({
    type: TOGGLE_DARK_MODE,
});

export const toggleLightMode = () => ({
    type: TOGGLE_LIGHT_MODE,
});

export const setIfLogin = (isLoggedIn) => ({
    type: "SET_IF_LOGIN",
    payload: isLoggedIn
}); 