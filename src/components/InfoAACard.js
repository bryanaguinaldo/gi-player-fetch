import React from "react";

function InfoAACard(props) {
    return (
        <div className="w-60 h-24 bg-gi-alabaster rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md text-gi-police-blue shadow-lg flex items-center border-2 border-inner border-gi-tan">
            <img src={"assets/" + props.icon + ".png"} className="h-24" />
            <div className="flex justify-center">
                <div>
                    <span>{props.title}</span>
                    <br />
                    <span
                        className={
                            props.count === "Not yet attempted"
                                ? "text-xs text-gi-antique-brass"
                                : "text-3xl"
                        }
                    >
                        {props.count === null ? 0 : props.count}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default InfoAACard;
