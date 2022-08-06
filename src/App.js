import { useState } from "react";
import "./App.css";
import BasePlayerCard from "./components/BasePlayerCard";
import Footer from "./components/Footer";
import axios from "axios";
import MessageCard from "./components/MessageCard";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasQueried, setHasQueried] = useState(false);
    const [userData, setUserData] = useState(null);
    const [nameCards, setNameCards] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const [uid, setUid] = useState(0);
    const [hasError, setHasError] = useState(false);

    function handleUidChange(val) {
        setUid(() => val);
    }

    function handleRequest() {
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

        axios.get("json/namecards.json").then((response) => {
            setNameCards(response.data);
        });

        axios.get("json/characters.json").then((response) => {
            setProfilePicture(response.data);
        });

        setHasQueried(true);
    }

    return (
        <div className="App">
            <div className="h-screen w-full flex justify-center items-center">
                <div>
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            className="w-3/4 h-10 rounded-md mx-2 my-2 text-center"
                            placeholder="Enter UID..."
                            onChange={(e) => handleUidChange(e.target.value)}
                            onKeyPress={(e) => {
                                !/[0-9]/.test(e.key) && e.preventDefault();
                                uid.length >= 9 && e.preventDefault();
                            }}
                        />
                        <button
                            className="w-1/4 h-10 bg-gi-alabaster shadow-lg rounded-md mx-2 my-2"
                            disabled={
                                uid.length !== 9 || isNaN(uid) ? true : false
                            }
                            onClick={handleRequest}
                        >
                            Find
                        </button>
                    </div>
                    {!hasQueried ? null : isLoading ? (
                        <MessageCard message="Loading..." />
                    ) : hasError ? (
                        <MessageCard message="Not Found." />
                    ) : (
                        <BasePlayerCard
                            uid={uid}
                            nameCard={
                                userData == null
                                    ? "Genshin_Impact_A_New_World"
                                    : nameCards[userData.playerInfo.nameCardId]
                            }
                            profilePicture={
                                profilePicture[
                                    userData.playerInfo.profilePicture.avatarId
                                ].thumbnail
                            }
                            nickname={
                                userData == null
                                    ? "Undefined"
                                    : userData.playerInfo.nickname
                            }
                            adventureRank={
                                userData == null ? 0 : userData.playerInfo.level
                            }
                            worldLevel={
                                userData == null
                                    ? 0
                                    : userData.playerInfo.worldLevel
                            }
                            signature={
                                userData == null
                                    ? null
                                    : userData.playerInfo.signature
                            }
                        />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
