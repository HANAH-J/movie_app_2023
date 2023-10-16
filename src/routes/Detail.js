import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        if (location.state === null) {
            history('/');
        }
    }, [location, history]);

    if (location.state) {
        return <span>{location.state.title}</span>;
    } else {
        return null;
    }
}

export default Detail;