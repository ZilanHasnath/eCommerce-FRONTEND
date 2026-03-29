import React from "react";
import { useParams } from "react-router-dom";
import ProfileReady from "../pageMake/ProfileReady.jsx";


const Profile = () => {


    const { id } = useParams();

    return <ProfileReady id={id} />;

};

export default Profile;
