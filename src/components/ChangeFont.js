import React, { useState } from "react";
import { useDispatch } from "react-redux"; // modify state value
import { changeFont } from "../features/theme";

function ChangeFont() {
    const [fontSize, setFont] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <select
                onChange={(event) => {
                    setFont(event.target.value);
                }}
            >
                <option selected disabled>select font size</option>
                <option value="12px">12</option>
                <option value="24px">24</option>
                <option value="48px">48</option>
            </select>
            <spacer> </spacer>
            <button
                onClick={() => {
                    dispatch(changeFont(fontSize));
                }}
            >
                CHANGE FONT SIZE
            </button>
            <spacer> </spacer>
            <button onClick={refreshPage}>reset</button>
        </div>
    );

    function refreshPage() {
        window.location.reload(false);
    }
}

export default ChangeFont;