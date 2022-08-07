import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

function PlayerBanner(props) {
    return (
        <div className="bg-gi-alabaster h-28 w-full border-2 border-white rounded-full px-9 flex items-center">
            <div className="flex items-center">
                <div
                    className="h-[90px] w-[90px] border-2 border-white bg-gi-antique-brass rounded-full shadow-inner shadow-lg"
                    style={{
                        backgroundImage:
                            "url('characters/" +
                            (props.profilePicture === null
                                ? "Character_Lumine_Thumb"
                                : props.profilePicture) +
                            ".png')",
                        backgroundPosition: "center",
                        backgroundSize: "125%",
                    }}
                ></div>
                <div className="mx-3">
                    <span className="flex justify-start text-gi-police-blue text-lg sm:text-xl">
                        {props.playerName == null
                            ? "Undefined"
                            : props.playerName}
                    </span>
                    <span className="flex justify-start text-xs sm:text-sm text-gi-police-blue">
                        Lv.{" "}
                        {props.adventureRank === null
                            ? 60
                            : props.adventureRank}{" "}
                        • World Level{" "}
                        {props.worldLevel === null ? 8 : props.worldLevel}
                    </span>
                    {props.signature == null ||
                    props.signature === "" ? null : (
                        <div className="flex justify-start text-xs sm:text-sm text-gi-police-blue">
                            <FontAwesomeIcon
                                type="fas"
                                icon="comment-dots"
                                size="lg"
                                flip="horizontal"
                            />
                            <span className="ml-2">{props.signature}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlayerBanner;
