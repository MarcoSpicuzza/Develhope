import React, { useState } from "react";
import axios from "axios"
import Setup from "./Setup";
import Delivery from "./Delivery";

const FetchComponent = () => {
    const [fetch, setFetch] = useState();
    const [secondaryFetch, setSecondaryFetch] = useState();

    function onClickFetch() {
        axios.get('https://v2.jokeapi.dev/joke/Programming').then(res => {
            setFetch(() => {
                if (res.data.type === "single") {
                    alert("Proprietà non esistente!")
                } else {
                    setSecondaryFetch(res.data)
                }
            })

        })
    }

    return ( 
        <div>
            <button onClick={onClickFetch}>FETCH</button>
            <Setup setup={secondaryFetch && secondaryFetch.setup}></Setup>
            <Delivery delivery={secondaryFetch && secondaryFetch.delivery}></Delivery>
        </div>
     );
}
 
export default FetchComponent;