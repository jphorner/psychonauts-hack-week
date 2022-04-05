import Link from 'next/link'
import CharacterBio from '../../components/CharacterBio'

export default function Characters({characters}) {
  const characterList = characters.map( character => {
    return (
      <CharacterBio img={character.img} name={character.name} psiPowers={character.psiPowers} id={character.psiPowers.id} />
    )
  })

  return (
    <div className="all-bios">
      <h1>Characters</h1>
      <div className="home-btn-2-wrapper">
        <Link href="/">
          <a className="home-btn-2">Home</a>
        </Link>
      </div>
      <div className="bios-container">
        {characterList}
      </div>
    </div>
  )
}