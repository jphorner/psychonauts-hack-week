import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const allBadgeGroups = [
  '/badge-groups/Badge-group-1.png', '/badge-groups/Badge-group-2.png', '/badge-groups/Badge-group-3.png',
  '/badge-groups/Badge-group-4.png', '/badge-groups/Badge-group-5.png', '/badge-groups/Badge-group-6.png',
  '/badge-groups/Badge-group-7.png', '/badge-groups/Badge-group-8.png', '/badge-groups/Badge-group-9.png'
];

export async function getStaticProps() {
  interface characterDataTypes {
    gender: string;
    img: string;
    name: string;
    __v: string;
    _id: string;
    psiPowers: psiPowerTypes[ ];
  }

  interface psiPowerTypes extends characterDataTypes {
    description: string;
    img: string;
    name: string;
    _id: string;
  }

  let allCharacterData: characterDataTypes[ ];
  await fetch('https://psychonauts-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(data => allCharacterData = data)

  return {
    props: {
      allCharacterData
    }
  }
}

export default function Home({ characters, addCharacterData, allCharacterData, badgeGroup }) {
  if (!characters) {
    addCharacterData(allCharacterData)
  };

  useEffect(() => {
    console.log('UPDATED: ', characters);
  }, [characters])

  return (
    <div className={styles.container}>
      <Head>
        <title>Psychonauts Final Exam</title>
        <meta name="description" content="Prove your psychic skills by completing this Psychonauts quiz!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="intro-text">
          <h1 className={styles.title}>
            Welcome to Whispering Rock!
          </h1>
          <h2>
            Before you can become a fully-fledged Psychonaut, you'll need to prove your skills. <br />
            Click 'Quiz me!' to answer questions and earn merit badges.<br />
            If you earn all eight badges, you will be promoted!
          </h2>
        </div>
        <div className={styles.grid}>
          <Link href="/study-guides/character-guide">
            <a className={styles.card}>
              <h2>Characters</h2>
            </a>
          </Link>
          <Link href="/quiz">
            <a className={styles.card}>
              <h2>Quiz Me!</h2>
            </a>
          </Link>
          <Link href="study-guides/psi-powers">
            <a className={styles.card}>
              <h2>Psi Powers</h2>
            </a>
          </Link>
        </div>
        <div className="merit-badges-wrapper">
          <Image src={allBadgeGroups[badgeGroup]} height={350} width={480}/>
          {badgeGroup === 0 && <h3 className="badge-status">You have one merit badge. Answer questions to earn more!</h3>}
          {badgeGroup > 0 && badgeGroup < 14 && <h3 className="badge-status">You have {badgeGroup + 1} merit badges.</h3>}
          {badgeGroup === 8 && <h3 className="badge-status">You are officially a Psychonaut! Congratulations!</h3>}
        </div>
      </main>
    </div>
  )
}
