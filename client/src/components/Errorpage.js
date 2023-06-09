import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='app'>
            <h3>
                You've not provided the neccessery details. Kindly head back to the{" "}
                <Link to='/'>Homepage</Link>.
            </h3>
        </div>
    );
};

export default ErrorPage