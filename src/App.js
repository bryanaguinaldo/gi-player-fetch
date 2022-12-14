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
    const [userData, setUserData] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const [uid, setUid] = useState(0);
    const [hasError, setHasError] = useState(false);

    function handleRequest() {
        if (!isNaN(uid) && uid.length === 9) {
            setIsLoading(true);
            axios
                .get(`https://enka.network/u/` + uid + `/__data.json`)
                .then((response) => {
                    setUserData(response.data);
                    setHasError(false);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setHasError(true);
                });

            axios.get("json/characters.json").then((response) => {
                setProfilePicture(response.data);
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
                            <span className="text-danger">
                                Player not found!
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <Query
                    profilePicture={
                        profilePicture[
                            userData.playerInfo.profilePicture.avatarId
                        ].thumbnail
                    }
                    playerName={userData.playerInfo.nickname}
                    adventureRank={userData.playerInfo.level}
                    worldLevel={userData.playerInfo.worldLevel}
                    signature={userData.playerInfo.signature}
                    achievementCount={userData.playerInfo.finishAchievementNum}
                    abyssFloor={userData.playerInfo.towerFloorIndex}
                    abyssChamber={userData.playerInfo.towerLevelIndex}
                    characters={userData.playerInfo.showAvatarInfoList}
                    characterData={profilePicture}
                    onClick={() => {
                        setHasQueried(false);
                        setUserData(null);
                        setUid(null);
                    }}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
