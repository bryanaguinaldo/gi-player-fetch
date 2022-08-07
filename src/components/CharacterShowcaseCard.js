import React from "react";

function CharacterShowcaseCard(props) {
    return (
        <div className="h-[93px] w-[75px] bg-gi-alabaster rounded-lg">
            <div
                className="h-[77px] w-[75px] bg-gi-antique-brass rounded-lg"
                style={{
                    backgroundImage:
                        "url('characters/" +
                        (props.picture === null
                            ? "Character_Lumine_Thumb"
                            : props.picture) +
                        ".png')",
                    backgroundPosition: "center",
                    backgroundSize: "125%",
                }}
            ></div>
        </div>
    );
}

export default CharacterShowcaseCard;
