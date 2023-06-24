import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import axios from "axios";
import Main from "./components/Main";
import Loading from "./components/Loading";
import Query from "./components/Query";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasQueried, setHasQueried] = useState(false);
    const [playerData, setPlayerData] = useState(null);
    const [characterData, setCharacterData] = useState(null);
    const [uid, setUid] = useState(0);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function handleRequest() {
        if (!isNaN(uid) && uid.length === 9) {
            setIsLoading(true);
            axios
                .get(`https://enka.network/api/uid/` + uid, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    responseType: "json",
                })
                .then((response) => {
                    if (response.data.playerInfo.nickname === undefined) {
                        setIsLoading(false);
                        setErrorMessage("Player not found!");
                        setHasError(true);
                    } else {
                        setPlayerData(response.data);
                        setHasError(false);
                        setIsLoading(false);
                    }
                    console.log("test");
                })
                .catch((error) => {
                    setIsLoading(false);
                    setErrorMessage("An error has occured.");
                    setHasError(true);
                });

            axios
                .get(
                    "https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/characters.json"
                )
                .then((response) => {
                    setCharacterData(response.data);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setErrorMessage(
                        "Oops! This project has not been updated to the latest version."
                    );
                    setHasError(true);
                });

            setHasQueried(true);
        }
    }

    return (
        <div className="App">
            {!hasQueried ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <Main
                        onChange={(value) => {
                            setUid(value);
                        }}
                        onClick={() => {
                            handleRequest();
                        }}
                    />
                </div>
            ) : isLoading ? (
                <Loading />
            ) : hasError ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <div className="w-full">
                        <Main
                            onChange={(value) => {
                                setUid(value);
                            }}
                            onClick={() => {
                                handleRequest();
                            }}
                        />
                        <div>
                            <span className="text-danger">{errorMessage}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <Query
                    profilePicture={String(
                        characterData[
                            playerData.playerInfo.profilePicture.avatarId
                        ].SideIconName
                    ).replace("Side_", "")}
                    playerName={playerData.playerInfo.nickname}
                    adventureRank={playerData.playerInfo.level}
                    worldLevel={
                        playerData.playerInfo.worldLevel === undefined
                            ? 1
                            : playerData.playerInfo.worldLevel
                    }
                    signature={playerData.playerInfo.signature}
                    achievementCount={
                        playerData.playerInfo.finishAchievementNum
                    }
                    abyssFloor={playerData.playerInfo.towerFloorIndex}
                    abyssChamber={playerData.playerInfo.towerLevelIndex}
                    characters={playerData.playerInfo.showAvatarInfoList}
                    characterData={characterData}
                    onClick={() => {
                        setHasQueried(false);
                        // setPlayerData(null);
                        setUid(null);
                    }}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
