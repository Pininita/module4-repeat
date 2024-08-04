import React from "react";
import { RickAndMortyEpisodeCard } from "../high-order-component/RickAndMortyEpisodeCard";

export const EpisodesPage = () => {

    return (
        <div>
            <h4>episodes page</h4>
            <section className="main-episodes-page">
                <RickAndMortyEpisodeCard id={1} />
                <RickAndMortyEpisodeCard id={5} />
                <RickAndMortyEpisodeCard id={7} />
                <RickAndMortyEpisodeCard id={18} />
            </section>


        </div>
    )
}