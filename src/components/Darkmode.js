import React from "react";

const Darkmode = () => {
    let clickedClass = "clicked";
    const navigation = document.getElementById(".header__nav");
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        navigation.classList.add(theme);
    } else {
        navigation.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            navigation.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            navigation.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    }

    return (
        <>
            <button
                className={theme === "dark" ? clickedClass : ""}
                id="darkMode"
                onClick={(e) => switchTheme(e)}
            ></button>
        </>
    );
}


export default Darkmode;