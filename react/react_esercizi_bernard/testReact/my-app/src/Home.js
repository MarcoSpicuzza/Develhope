// import Axios from "axios";
import { useState } from "react";
import useSWR from 'swr'
import Even from "./Even.js";
import Odd from "./Odd.js";

const fetcher = (url) => fetch(url).then((res) => res.text());

const Home = () => {
    // const  [fraseIniziale, setFraseIniziale] = useState();
     const [odd, setFraseOdd] = useState([]);
     const [even, setFraseEven] = useState([]);

    // CON useSWR
    const {data, mutate} = useSWR(`http://numbersapi.com/random/math`, fetcher, {
        revalidateOnMount: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    function clickHandler() {
        // CON AXIOS
        // Axios.get(`http://numbersapi.com/random/math`).then((response) => setFraseIniziale(response.data))
        mutate()
        if (data) {
            if (data.split(" ")[0] % 2 === 0) {
                setFraseEven(prevState => [...prevState, data])
            }
            else {
                setFraseOdd(prevState => [...prevState, data])
            }
        }
    }

// SENZA USEEFFECT E SWR
    // function clickHandler() {
    //     (async () => {
    //         const request = await fetch(`http://numbersapi.com/random/math`);
    //         const data = await request.text();
    //         setdata(data);
    //     })()
    // }

    function deleteOnClick(e) {
            if (e.target.name.split(" ")[0] % 2 === 0) {
                setFraseEven(prevState => prevState.filter(text => text !== e.target.name))
            } else {
                setFraseOdd(prevState => prevState.filter(text => text !== e.target.name))
            }
}
    return ( 
        <>
            <button onClick={clickHandler}>GET</button>
            
            <h1>Phrase</h1>
            <h3>{data}</h3>

            <Even props={{even, deleteOnClick}}/>

            <Odd props={{odd, deleteOnClick}}/>
        </>
     );
}
 
export default Home;


// Parte 1
// Creare un'applicazione che abbia i componenti Home, Odd e Even
// Visualizzare nel componente Home un bottone che al click ritorna la frase contenuta nell'endpoint http://numbersapi.com/random/math ed inoltre aggiungere due bottoni: even e odd.
// In base al primo numero della frase risultata dall'API, aggiungetela automaticamente al componente Odd o Even; cliccando sui rispettivi pulsanti verrà mostrata la lista di frasi.

// Parte 2
// Per ogni item della lista aggiungere un bottone che cancella l'item