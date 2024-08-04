import React from "react";
import { Link } from "react-router-dom";


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
                <button>Go to characters</button>
            </Link>
            <br/>
            <Link to="/episodes">
                <button>Go to episodes</button>
            </Link>
        </>
    )
}