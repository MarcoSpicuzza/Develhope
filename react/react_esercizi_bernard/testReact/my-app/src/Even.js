import { useState } from "react";

const Even = ({props}) => {
    const [enable, setEnable] = useState(false)
    
    function enabler() {
        setEnable(!enable);
    }

    return ( 
        <div>
            <button onClick={enabler}>EVEN</button>
            {enable && props.even.map((text, index) => <li key={text + index}>{text} <button name={text} onClick={props.deleteOnClick}>DELETE</button> </li>)}
        </div>
     );
}
 
export default Even;