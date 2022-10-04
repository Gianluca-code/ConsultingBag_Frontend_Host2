import React from "react";
import {useNavigate} from "react-router-dom";

const Protected = ({ isLoggedIn, isActive, page, children }) => {
    const navigate=useNavigate();
    if (!isLoggedIn) {
        return navigate("/" + page);
    }else if(!isActive){
        return navigate("/" + page);
    }
    return children;
};
export default Protected;