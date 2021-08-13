import { useState, useEffect } from "react"
import FadeIn from 'react-fade-in';

export const RandomFact = ()=>{
    const [randomFact, setRandomFact] = useState({})

    const reqLink = `https://uselessfacts.jsph.pl/random.json?language=en`

    useEffect(()=>{
        fetch(reqLink)
            .then((res)=>{return res.json()})
                .then((data)=>{setRandomFact(data)})
    },[reqLink])
    return (<FadeIn>
        <section className="RandomFactSection">
            {randomFact.text && (
                <h1 className="RandomFactMessage">Random Fact: {randomFact.text}</h1>
            )}
        </section></FadeIn>)
}