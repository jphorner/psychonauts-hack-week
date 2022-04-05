import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

let quizFinished: boolean = false;

const QuizQuestion = ({ characters, addMeritBadge, questionPointer, setNextQuestion }) => {
    interface questionTypes {
        question: string;
        answer: string;
        options: string;
        imgRef: any;
    }

    const questions = [
        {
            question: "What is this character's name?",
            answer: "Razputin Aquato",
            options: ["Morceau Oleander", "Sasha Nein", "Augustus Aquato", "Razputin Aquato"],
            imgRef: characters[0].img
        },
        {
            question: "What is this Psi Power called?",
            answer: "Levitation",
            options: ["Clairvoyance", "Levitation", "Telekinesis", "Shield"],
            imgRef: "/badges/Levitation.webp"
        },
        {
            question: "What is this character's name?",
            answer: "Ford Cruller",
            options: ["Ford Cruller", "Sasha Nein", "Dogen Boole", "Augustus Aquato"],
            imgRef: characters[1].img
        },
        {
            question: "What is this Psi Power called?",
            answer: "Telekinesis",
            options: ["Telekinesis", "Levitation", "Shield", "Confusion"],
            imgRef: "/badges/Telekinesis.webp"
        },
        {
            question: "What is this character's name?",
            answer: "Morceau Oleander",
            options: ["Sasha Nein", "Bobby Zilch", "Bob Zanotto", "Morceau Oleander"],
            imgRef: characters[2].img
        },
        {
            question: "What is this Psi Power called?",
            answer: "Marksmanship",
            options: ["Confusion", "Clairvoyance", "Marksmanship", "Telekinesis"],
            imgRef: "/badges/Marksmanship.webp"
        },
        {
            question: "What is this character's name?",
            answer: "Milla Vodello",
            options: ["Lili Zanotto", "Milla Vodello", "Chloe Barge", "Milka Phage"],
            imgRef: characters[3].img
        },
        {
            question: "What is this Psi Power called?",
            answer: "Invisibility",
            options: ["Clairvoyance", "Levitation", "Confusion", "Invisibility"],
            imgRef: "/badges/Invisibility.webp"
        },
        {
            question: "What is this character's name?",
            answer: "Lili Zanotto",
            options: ["Chloe Barge", "Lili Zanotto", "Sasha Nein", "Phoebe Love"],
            imgRef: characters[4].img
        },
        {
            question: "This Psi Power is called Shield. What does it do?",
            answer: "Allows the user to create a psychic shield.",
            options: ["Allows the user to see through the minds of others.", "Allows the user to create a psychic shield.", "Allows the user to move objects with their mind.", "Allows the user to strike things down using their mind."],
            imgRef: "/badges/Shield.webp"
        },
        {
            question: "This is Sasha Nein. What Psi Power does he teach Raz?",
            answer: "Marksmanship",
            options: ["Invisibility", "Clairvoyance", "Marksmanship", "Telekinesis"],
            imgRef: characters[5].img
        },
        {
            question: "What is this Psi Power called?",
            answer: "Pyrokinesis",
            options: ["Pyrokinesis", "Marksmanship", "Telekinesis", "Levitation"],
            imgRef: "/badges/Pyrokinesis.webp"
        },
        {
            question: "This is Augustus Aquato. What is his signature psychic ability?",
            answer: "None - The Aquatos hate psychics.",
            options: ["Levitation - He uses it in his acrobatics.", "Telekinesis - He uses it for juggling.", "Invisibility - He uses it to evade the authorities.", "None - The Aquatos hate psychics."],
            imgRef: characters[6].img
        },
        {
            question: "This Psi Power is called Clairvoyance. What does it do?",
            answer: "Allows the user to see through the minds of others.",
            options: ["Allows the user to confuse enemies.", "Allows the user to see through the minds of others.", "Allows the user to move objects with their mind.", "Allows the user to strike things down using their mind."],
            imgRef: "/badges/Clairvoyance.webp"
        },
        {
            question: "Who is this character, and what did he (allegedly) do?",
            answer: "Dogen Boole - He may have blown someone up.",
            options: ["Bobby Zilch - He may have stolen someone's brain.", "Dogen Boole - He may have blown someone up.", "Benny Fideleo - He may have stolen money from the camp.", "Quentin Hedgemouse - He may have aided Dr. Loboto."],
            imgRef: characters[12].img
        },
        {
            question: "What is this Psi Power called, and what does it do?",
            answer: "Confusion - Allows the user to confuse enemies.",
            options: ["Confusion - Allows the user to see through the minds of others.", "Shield - Allows the user to create a psychic shield.", "Clairvoyance - Allows the user to confuse enemies.", "Telekinesis - Allows the user to turn invisible for a short period of time.", "Confusion - Allows the user to confuse enemies.", "Clairvoyance - Allows the user to see through the minds of others."],
            imgRef: "/badges/Confusion.webp"
        },
    ]

    const isMeritBadgeEarned = () => {
        if (questionPointer > 0 && questionPointer % 2 === 1) {
            addMeritBadge();
        }
    }

    const checkOption = (event) => {
        if (event.target.innerText === questions[questionPointer].answer && questionPointer < 15) {
            console.log('You got it!');
            setNextQuestion();
            isMeritBadgeEarned();
        } else if (event.target.innerText === questions[questionPointer].answer && questionPointer === 15) {
            console.log('END OF QUIZ');
            addMeritBadge();
            quizFinished = true;
        }
    }

    let currentOptions = questions[questionPointer].options.map( option => {
        return <h3 className="quiz-option" onClick={checkOption}>{option}</h3>
    })

    return (
        <div className="question-container">
            {!quizFinished && 
                <div>
                    <h2>{questions[questionPointer].question}</h2>
                    <img src={questions[questionPointer].imgRef}></img>
                    <div>{currentOptions}</div>
                </div>
            }
            {quizFinished && 
                <div className="quiz-complete">
                    <h1>You did it!</h1>
                    <h2>You passed your final exam and have been promoted.</h2>
                    <Image src="/badges/Psychonaut_Badge.webp" height={100} width={120} />
                    <h2>Here is your official Psychonauts badge. You've earned it!</h2>
                    <h3>Return to the homepage to see your complete set of merit badges!</h3>
                </div>
            }
        </div>
    )
}

export default QuizQuestion;