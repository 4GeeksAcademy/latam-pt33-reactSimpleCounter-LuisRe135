import React from "react";

function Card(props){

    return (

        <div className="card bg-dark" >
            <div className="card-body">
                <h5 className="card-title text-light">{props.number || 0}</h5>
            </div>

        </div>

    );

}

export default Card;