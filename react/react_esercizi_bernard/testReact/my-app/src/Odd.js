import { useState } from "react";

const Odd = ({props}) => {
    const [enable, setEnable] = useState(false);

    function enabler() {
        setEnable(!enable);
    }

    return ( 
        <div>
            <button onClick={enabler}>ODD</button>
            {enable && props.odd.map((text, index) => <li key={text + index}>{text} <button name={text} onClick={props.deleteOnClick}>DELETE</button> </li>)}
        </div>
     );
}
 
export default Odd;