import React from "react";

function BasePlayerCard(props) {
    return (
        <div className="w-[300px] h-[404px] sm:w-[460px] sm:h-[618px] lg:h-[724px] lg:w-[538px] bg-gi-alabaster rounded-md shadow-lg">
            <div
                className="h-[112px] sm:h-[172px] sm:h-[201px] w-full rounded-md"
                style={{
                    backgroundImage:
                        "url('namecards/Namecard_Background_" +
                        props.nameCard +
                        ".png",
                    backgroundSize: "cover",
                }}
            >
                <div className="flex justify-center pt-3">
                    <span className="text-xs sm:text-sm lg:text-md text-white shadow-sm">
                        UID: {props.uid == null ? "000000000" : props.uid}
                    </span>
                </div>
            </div>
            <div className="-translate-y-[21%]">
                <div className="flex justify-center">
                    <div>
                        <div className="w-[87px] h-[87px] sm:h-[135px] sm:w-[135px] lg:h-[156px] lg:w-[156px] rounded-full bg-gi-tan shadow-lg flex justify-center items-center">
                            <div className="w-[83px] h-[83px] sm:h-[129px] sm:w-[129px] lg:h-[151px] lg:w-[151px] rounded-full bg-gi-alabaster shadow-md">
                                <div className="h-full flex justify-center items-center">
                                    <div className="w-[76px] h-[76px] sm:w-[118px] sm:h-[118px] lg:w-[138px] lg:h-[138px] bg-gi-antique-brass rounded-full shadow-inner shadow-lg bg-[url('../public/characters/Character_Ganyu_Thumb.png')] bg-center bg-[length:125%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="text-lg sm:text-2xl lg:text-3xl text-gi-police-blue">
                        {props.nickname == null ? "Undefined" : props.nickname}
                    </span>
                </div>
                <div className="px-[10%] mt-2 lg:my-2 lg:mt-6">
                    <div className="w-full bg-gi-olivine flex">
                        <span className="justify-start ml-3 text-white text-sm sm:text-lg lg:text-xl">
                            Adventure Rank
                        </span>
                        <span className="ml-auto mr-3 text-white text-sm sm:text-lg lg:text-xl">
                            {props.adventureRank == null
                                ? 0
                                : props.adventureRank}
                        </span>
                    </div>
                </div>
                <div className="px-[10%] my-2">
                    <div className="w-full bg-gi-dark-vanilla flex">
                        <span className="justify-start ml-3 text-white text-sm sm:text-lg lg:text-xl">
                            World Level
                        </span>
                        <span className="ml-auto mr-3 text-white text-sm sm:text-lg lg:text-xl">
                            {props.worldLevel == null ? 0 : props.worldLevel}
                        </span>
                    </div>
                </div>
                <div className="px-[10%] mt-4">
                    <div className="w-full h-[84px] sm:h-[127px] lg:h-[150px] border-gi-dark-vanilla border-2 flex">
                        <span className="justify-start ml-3 text-gi-police-blue text-xs sm:text-lg lg:text-xl">
                            {props.signature}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasePlayerCard;
