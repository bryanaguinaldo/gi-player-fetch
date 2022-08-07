import React from "react";
import Main from "./Main";
import PlayerBanner from "./PlayerBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

function Query(props) {
    return (
        <div className="h-screen px-4 py-4">
            <div className="flex justify-center md:justify-end">
                <button
                    className="text-xl text-gi-alabaster border-gi-police-blue border-[1px] w-40 h-10 rounded-md mx-1 transition-all hover:bg-gi-police-blue"
                    onClick={(e) => {
                        props.onClick();
                    }}
                >
                    <FontAwesomeIcon type="fas" icon="angles-left" /> Return
                </button>
            </div>
            <div className="my-6 px-4 md:px-[5%] lg:px-[10%]">
                <PlayerBanner
                    profilePicture={props.profilePicture}
                    playerName={props.playerName}
                    adventureRank={props.adventureRank}
                    worldLevel={props.worldLevel}
                    signature={props.signature}
                />
            </div>
        </div>
    );
}

export default Query;
