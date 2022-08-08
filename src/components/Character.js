import React from "react";

function Character(props) {
    return (
        <div className="h-32 w-24 bg-gi-alabaster rounded-lg shadow-xl">
            <div
                className={
                    "h-24 w-24 " +
                    props.characterRating +
                    " rounded-tr-lg rounded-tl-lg rounded-br-3xl shadow-inner shadow-md"
                }
                style={{
                    backgroundImage:
                        "url('characters/" + props.characterImage + ".png')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                }}
            ></div>
            <span className="h-8 flex justify-center items-center text-gi-police-blue">
                Lv. {props.level == null ? 1 : props.level}
            </span>
        </div>
    );
}

export default Character;
