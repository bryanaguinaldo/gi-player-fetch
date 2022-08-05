import { useState } from "react";
import "./App.css";
import BasePlayerCard from "./components/BasePlayerCard";
import Footer from "./components/Footer";
import axios from "axios";
import LoadingPlayerCard from "./components/LoadingPlayerCard";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [hasQueried, setHasQueried] = useState(false);
    const [userData, setUserData] = useState(null);
    const [nameCards, setNameCards] = useState(null);
    const [uid, setUid] = useState(0);

    function handleUidChange(val) {
        setUid(() => val);
    }

    function handleRequest() {
        setIsLoading(true);
        axios
            .get(`https://enka.network/u/` + uid + `/__data.json`)
            .then((response) => {
                setUserData(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error");
            });

        axios.get("json/namecards.json").then((response) => {
            setNameCards(response.data);
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
                        />
                        <button
                            className="w-1/4 h-10 bg-gi-alabaster shadow-lg rounded-md mx-2 my-2"
                            onClick={handleRequest}
                        >
                            Find
                        </button>
                    </div>
                    {!hasQueried ? null : isLoading ? (
                        <LoadingPlayerCard />
                    ) : (
                        <BasePlayerCard
                            uid={uid}
                            nameCard={
                                userData == null
                                    ? "Genshin_Impact_A_New_World"
                                    : nameCards[userData.playerInfo.nameCardId]
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
