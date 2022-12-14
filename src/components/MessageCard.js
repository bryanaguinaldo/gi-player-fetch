import React from "react";

function MessageCard(props) {
    return (
        <div className="w-[300px] h-[404px] sm:w-[460px] sm:h-[618px] lg:h-[724px] lg:w-[538px] bg-gi-alabaster rounded-md shadow-lg flex justify-center items-center">
            <span className="text-xl text-gi-police-blue">{props.message}</span>
        </div>
    );
}

export default MessageCard;
