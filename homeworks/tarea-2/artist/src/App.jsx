import { useEffect, useState } from 'react'
import './App.css'
import { CharacterCard } from './components/CharacterCard';

function App() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = 1;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data)
        setName(data.name)
        setImage(data.image);
        setGender(data.gender);
        setStatus(data.status);
      })
      .catch((error) => console.error("error find: ", error))
  }, [])

  return (
    <>
      <h1>RICK AND MORTY CHARACTERS</h1>
      <div>
        <CharacterCard
          name={name}
          image={image}
          gender={gender}
          status={status}
        />
      </div>

    </>
  )
}

export default App
