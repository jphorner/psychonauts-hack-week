import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import QuizQuestion from '../components/QuizQuestion.tsx'

export default function Quiz({ characters, addMeritBadge, questionPointer, setNextQuestion }) {
    return (
        <div>
            <QuizQuestion characters={characters} addMeritBadge={addMeritBadge} questionPointer={questionPointer} setNextQuestion={setNextQuestion} />
            <div className="home-btn-3-wrapper">
                <Link href="/">
                    <a className="home-btn-3">Home</a>
                </Link>
            </div>
        </div>
    )
}