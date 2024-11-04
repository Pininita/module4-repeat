import React from "react";
import { RickAndMortyEpisodeCard } from "../high-order-component/RickAndMortyEpisodeCard";

export const EpisodesPage = () => {

    return (
        <div>
            <h1>RICK AND MORTY EPISODES</h1>
            <section className="main-episodes-page">
                <RickAndMortyEpisodeCard/>
                
            </section>


        </div>
    )
}