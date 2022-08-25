import React from "react";
import { useSelector } from "react-redux"; //grab value each time when needed

function Profile() {                     // index.js reducer
    const user1 = useSelector((state) => state.users.value);
    const themeColor = useSelector((state) => state.theme.value);

    return (
        <div style={{ color: themeColor, fontSize: themeColor, textAlign: themeColor }}>
            <h1> Profile Page</h1>
            <h5> Detail will be displayed after login</h5>
            <p>  Name:  {user1.name} </p>
            <p>  Age:   {user1.age}</p>
            <p>  Email: {user1.email}</p>
            <p>  Phone: {user1.phone}</p>
        </div>
    );
}

export default Profile;