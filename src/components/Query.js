import React from "react";
import PlayerBanner from "./PlayerBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Character from "./Character";
import InfoAACard from "./InfoAACard";

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
                <div className="flex justify-center gap-2">
                    <div className="mt-4">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-12 sm:col-span-6">
                                <InfoAACard
                                    icon="Achievement_Wonders_of_the_World"
                                    title="Achievements"
                                    count={
                                        props.achievementCount == null
                                            ? 0
                                            : props.achievementCount
                                    }
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <InfoAACard
                                    icon="Achievement_Domains_and_Spiral_Abyss_Series_I"
                                    title="Spiral Abyss"
                                    count={
                                        props.abyssFloor == null
                                            ? "Not yet attempted"
                                            : props.abyssFloor +
                                              " - " +
                                              props.abyssChamber
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                    <div>
                        <div className="grid grid-cols-12 rounded-lg bg-gi-alabaster py-2 px-2 shadow-inner shadow-lg gap-2 text-gi-police-blue">
                            {props.characters == null ? (
                                <div className="col-span-12 flex justify-center">
                                    This player has not set any character in
                                    their showcase.
                                </div>
                            ) : (
                                props.characters.map((character, index) => {
                                    return (
                                        <div
                                            className="col-span-4 md:col-span-3"
                                            key={character}
                                        >
                                            <Character
                                                level={character.level}
                                                element={
                                                    "Element_" +
                                                    props.characterData[
                                                        character.avatarId
                                                    ].Element
                                                }
                                                characterImage={String(
                                                    props.characterData[
                                                        character.avatarId
                                                    ].SideIconName
                                                ).replace("Side_", "")}
                                                characterRating={
                                                    props.characterData[
                                                        character.avatarId
                                                    ].QualityType ===
                                                    "QUALITY_PURPLE"
                                                        ? "bg-gi-four-star"
                                                        : props.characterData[
                                                              character.avatarId
                                                          ].QualityType ===
                                                          "QUALITY_ORANGE"
                                                        ? "bg-gi-five-star"
                                                        : "bg-gi-special-character"
                                                }
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Query;
