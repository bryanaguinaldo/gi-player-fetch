import React from "react";
import Main from "./Main";
import PlayerBanner from "./PlayerBanner";

function Query(props) {
    return (
        <div className="h-screen px-4 py-4">
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
