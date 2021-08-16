//REACT
import { useState, useEffect } from "react"
//"Fade In" Component
import FadeIn from 'react-fade-in';

export const RandomFact = ()=>{
    const [randomFact, setRandomFact] = useState({})
//Link for request (notice only results on English)
    const reqLink = `https://uselessfacts.jsph.pl/random.json?language=en`
//Fetching data and setting it to "randomFact" state
    useEffect(()=>{
        fetch(reqLink)
            .then((res)=>{return res.json()})
                .then((data)=>{setRandomFact(data)})
    },[reqLink])
//If randomFact has state of "randomFact.text", it will render fandom fact that was fetched
    return (<FadeIn>
                <section className="RandomFactSection">
                    {randomFact.text && (
                        <h1 className="RandomFactMessage">Random Fact: {randomFact.text}</h1>
                    )}
                </section>
            </FadeIn>)
}