import React from "react";
import rickSanchez from '../pics/rick-sanchez.jpg'
import { Image } from "./Image";
import {Title} from "./Title.jsx"
import { Details } from "./Details";

export function ArtistCard() {

    return (
        <>
            <div className="artistCard">
                <Image url={rickSanchez} alt='rick-sanchez-image'/>
                <Title title='Rick Sanchez'/>
                <Details status='alive' gender='male'/>
            </div>
        </>
    )
}