import '../styles/globals.css'
import { useState } from 'react';
import '../components/CharacterBio.css'
import './study-guides/character-guide.css'
import '../styles/merit-badges.css'
import '../components/QuizQuestion.css'
import './study-guides/psi-powers.css'
import './quiz.css'

function MyApp({ Component, pageProps }) {
  const [characters, setCharacters] = useState(null);
  const addCharacterData = (data) => setCharacters(data);
  const [psiPowers, setPsiPowers] = useState(null);
  const addPsiPowerData = (data) => setPsiPowers(data);
  const [badgeGroup, setBadgeGroup] = useState(0);
  const addMeritBadge = () => setBadgeGroup(badgeGroup + 1);
  const [questionPointer, setQuestionPointer] = useState(0);
  const setNextQuestion = () => setQuestionPointer(questionPointer + 1);
  // const [selectedPower, setSelectedPower] = useState(
  //   {
  //     description: "Allows the user to see through the minds of others.",
  //     img: "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png",
  //     name: "clairvoyance",
  //     _id: "60a8a18f74e598888ff866a3"
  //   }
  // );
  // const setCurrentPower = (power) => setSelectedPower(power);

  return (
    <Component
      {...pageProps}
      characters={characters}
      addCharacterData={addCharacterData}
      badgeGroup={badgeGroup}
      addMeritBadge={addMeritBadge}
      questionPointer={questionPointer}
      setNextQuestion={setNextQuestion}
      // setCurrentPower={setCurrentPower}
    />
  )
}

export default MyApp
