import { useState, useEffect } from "react"

export const RandomFact = ()=>{
    const [randomFact, setRandomFact] = useState({})

    const reqLink = `https://uselessfacts.jsph.pl/random.json?language=en`

    useEffect(()=>{
        fetch(reqLink)
            .then((res)=>{return res.json()})
                .then((data)=>{setRandomFact(data)})
    },[reqLink])
    return (<section>
        {randomFact.text && (
            <h1>{randomFact.text}</h1>
        )}
    </section>)
}