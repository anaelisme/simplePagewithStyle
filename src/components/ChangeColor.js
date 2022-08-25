import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColor() {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    return (
        <div> {/*
            <input
                type="text"
                onChange={(event) => {
                    setColor(event.target.value);
                }}
            /> */}

            <select
                onChange={(event) => {
                    setColor(event.target.value);
                }}
            >
                <option selected disabled>select color</option>
                <option value="orange">orange</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="purple">purple</option>
            </select>
            <spacer> </spacer>
            <button
                onClick={() => {
                    dispatch(changeColor(color));
                }}
            >
                CHANGE COLOR
            </button>
            <spacer> </spacer>
            <button onClick={refreshPage}>reset</button>
        </div>
    );
    function refreshPage() {
        window.location.reload(false);
    }
}

export default ChangeColor;