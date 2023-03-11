import React from "react";

function Character(props) {
    return (
        <div className="h-32 w-24 bg-gi-alabaster rounded-lg shadow-xl">
            <div
                className={
                    "h-24 w-24 p-1 " +
                    props.characterRating +
                    " rounded-tr-lg rounded-tl-lg rounded-br-3xl shadow-inner shadow-md"
                }
                style={{
                    backgroundImage:
                        "url('http://enka.network/ui/" +
                        props.characterImage +
                        ".png')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                }}
            >
                <img className="h-6" src={"assets/" + props.element + ".png"} />
            </div>
            <span className="h-8 flex justify-center items-center text-gi-police-blue">
                Lv. {props.level == null ? 1 : props.level}
            </span>
        </div>
    );
}

export default Character;
