import React, { useState } from "react";
import { useDispatch } from "react-redux"; // modify state value
import { changeAlign } from "../features/theme";

function ChangeAlign() {
    const [align, setAlign] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <select
                onChange={(event) => {
                    setAlign(event.target.value);
                }}
            >
                <option selected disabled>select alignment</option>
                <option value="left">left</option>
                <option value="right">right</option>
            </select>
            <spacer> </spacer>
            <button
                onClick={() => {
                    dispatch(changeAlign(align));
                }}
            >
                CHANGE ALIGN
            </button> 
            <spacer> </spacer>
            <button onClick={refreshPage}>reset</button>
        </div>
    );
    function refreshPage() {
        window.location.reload(false);
    }
}

export default ChangeAlign;