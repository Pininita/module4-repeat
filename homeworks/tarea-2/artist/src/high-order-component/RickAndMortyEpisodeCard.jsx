import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { EpisodeCard } from "../components/EpisodeCard";

export const RickAndMortyEpisodeCard = (props) => {
    // const [name, setName] = useState('');
    // const [episode, setEpisode] = useState('');
    // const [air_date, setAir_date] = useState('');

    // const episodeId = props.id

    const [episodeList, setEpisodeList] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode?page=1`)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data)
                setEpisodeList(data.results)

                // const episodeIdInformation = data.results[episodeId];

                // setName(episodeIdInformation.name);
                // setEpisode(episodeIdInformation.episode);
                // setAir_date(episodeIdInformation.air_date);


            })
            .catch((error) => console.error("error find: ", error))
    }, [])
    return (
        <>
            <div className="episode-item"> 
            {
                episodeList.map((cap) => (
                    <div>
                <EpisodeCard
                name={cap.name}
                episode={cap.episode}
                air_date={cap.air_date}
                />
            </div>
                ))
            }
            </div>
        </>
    )
}