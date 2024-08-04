import React from "react";


export const HomePage = () => {

    return (
        <>
            <h1>
                Welcome To Rick And Morty's Page
            </h1>
            <h3>
                Quick Links
            </h3>
            <Link to="/characters">
                Go to characters
            </Link>
            <Link to="/episodes">
                Go to episodes
            </Link>
        </>
    )
}