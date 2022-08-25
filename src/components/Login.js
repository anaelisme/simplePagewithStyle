import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({ 
                        name: "Anael", 
                        age: 23, 
                        email: "aac@gmail.com", 
                        phone:"60123456789" 
                    }));
                }}
            >
                LOGIN
            </button>
            <spacer> </spacer>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                LOGOUT
            </button>
        </div>
    );
}

export default Login;