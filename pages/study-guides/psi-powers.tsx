import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export var currentPower: {
  description: string;
  img: string;
  name: string;
  _id: string;
} = {
  description: "Allows the user to see through the minds of others.",
  img: "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png",
  name: "clairvoyance",
  _id: "60a8a18f74e598888ff866a3"
}

export default function PsiPowerGuide ({setCurrentPower}) {
  interface powerTypes {
    description: string;
    img: string;
    name: string;
    _id: string;
  }

  const psiPowerList: powerTypes[ ] = [
    {
        description: "Allows the user to see through the minds of others.",
        img: "https://psychonauts-api.herokuapp.com/images/api/clairvoyance.png",
        name: "clairvoyance",
        _id: "60a8a18f74e598888ff866a3"
    },
    {
        description: "Allows the user to confuse enemies.",
        img: "https://psychonauts-api.herokuapp.com/images/api/confusion.png",
        name: "confusion",
        _id: "60a8a18f74e598888ff866a4"
    },
    {
        description: "Allows the user to turn invisible for a short period of time.",
        img: "https://psychonauts-api.herokuapp.com/images/api/invisibility.png",
        name: "invisibility",
        _id: "60a8a18f74e598888ff866a7"
    },
    {
        description: "Allows the user to levitate using a levitation ball.",
        img: "https://psychonauts-api.herokuapp.com/images/api/levitation.png",
        name: "levitation",
        _id: "60a8a18f74e598888ff866a8"
    },
    {
        description: "Allows the user to strike things down using their mind.",
        img: "https://psychonauts-api.herokuapp.com/images/api/marksmanship.png",
        name: "marksmanship",
        _id: "60a8a18f74e598888ff866a9"
    },
    {
        description: "Allows the user to set objects on fire using their mind.",
        img: "https://psychonauts-api.herokuapp.com/images/api/pyrokinesis.png",
        name: "pyrokinesis",
        _id: "60a8a18f74e598888ff866ab"
    },
    {
        description: "Allows the user to move objects with their mind.",
        img: "https://psychonauts-api.herokuapp.com/images/api/telekinesis.png",
        name: "telekinesis",
        _id: "60a8a18f74e598888ff866ad"
    },
    {
        description: "Allows the user to create a psychic shield.",
        img: "https://psychonauts-api.herokuapp.com/images/api/shield.png",
        name: "shield",
        _id: "60a8a18f74e598888ff866ac"
    }
  ];

  const psiPowerImages: Array<string> = [
    '/badges/Clairvoyance.webp', '/badges/Confusion.webp', '/badges/Invisibility.webp', '/badges/Levitation.webp',
    '/badges/Marksmanship.webp', '/badges/Pyrokinesis.webp', '/badges/Telekinesis.webp', '/badges/Shield.webp'
  ];

  const psiPowerNames: Array<string> = ['clairvoyance', 'confusion', 'invisibility', 'levitation', 'marksmanship', 'pyrokinesis', 'telekinesis', 'shield'];
  let powerPointer: number = -1;

  console.log(psiPowerList);

  const selectPower = (event: React.MouseEvent<HTMLDivElement | HTMLImageElement>) => {
    currentPower = psiPowerList.find( power => event.currentTarget.className === power.name );
    document.querySelector('.current-power').innerHTML = `
    <div>
      <div className="psi-power-image-container">
        <Image src=${currentPower.img} height={180} width={180} />
      </div>
      <h1>${currentPower.name.toUpperCase()}</h1>
      <h3 className="psi-power-description">
        <div>${currentPower.description}</div>
      </h3>
    </div>`
  }

  const displayPowers = psiPowerImages.map( power => {
    powerPointer++;
    return (
      <div className={psiPowerNames[powerPointer]} onClick={selectPower}>
        <img src={psiPowerImages[powerPointer]} className={psiPowerNames[powerPointer]} onClick={selectPower}></img>
      </div>
    )
  })

  return (
    <div className="psi-power-details">
      <div className="psi-powers-wrapper">
        <section className="psi-power-selection">
          {displayPowers}
        </section>
        <section className="current-power">
          <div className="psi-power-image-container">
            <Image src={currentPower.img} height={180} width={180} />
          </div>
          <h1>{currentPower.name.toUpperCase()}</h1>
          <h3 className="psi-power-description">
            <div>{currentPower.description}</div>
          </h3>
        </section>
        <div className="home-btn-wrapper">
          <Link href="/">
            <a className="home-btn">Home</a>
          </Link>
        </div>
      </div>
    </div>
  )
};