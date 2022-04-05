import Image from 'next/image'

const CharacterBio = ({img, name, psiPowers, id}) => {
    const abilities = psiPowers.map( power => {
        return (
            <div className={power.name}>
                <Image src={power.img} alt={power.name} height={40} width={50} /> 
                <div className="power-name">{power.name}</div>
            </div>
        )
    })

    return (
        <section className="bio-container" id={id}>
            <div className="bio-image-container">
                <Image src={img} alt={name} height="280%" width="200%" />
            </div>
            <div className="bio-character-info">
                <div className="name-container">
                    <h2>{name}</h2>
                </div>
                <section className="abilities-container">
                    {abilities}
                </section>
            </div>
        </section>
    )
}

export default CharacterBio;