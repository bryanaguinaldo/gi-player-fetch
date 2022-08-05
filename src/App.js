import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="h-screen flex justify-center items-center">
                <div className="h-[155px] w-[330px] md:h-[208px] md:w-[443px] lg:h-[316px] lg:w-[672px] bg-white rounded-md shadow-md bg-[url('../public/namecards/Namecard_Background_Genshin_Impact_A_New_World.png')] bg-cover">
                    <div className="p-4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-3">
                                <div className="w-[75px] h-[75px] md:h-[100px] md:w-[100px] lg:h-[155px] lg:w-[155px] rounded-full bg-gi-alabaster shadow-lg">
                                    <div className="h-full flex justify-center items-center">
                                        <div className="w-[67px] h-[67px] md:w-[90px] md:h-[90px] lg:w-[145px] lg:h-[145px] bg-gi-antique-brass rounded-full shadow-inner shadow-lg bg-[url('../public/characters/Character_Lumine_Thumb.png')] bg-center bg-[length:125%]" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <div className="h-[75px] md:h-[100px] lg:h-[155px] flex flex-row justify-start mx-4 mt-1 md:mt-2 lg:mx-4 mt-4">
                                    <div className="w-full">
                                        <div className="w-full flex justify-start items-center bg-black bg-opacity-[15%]">
                                            <span className="text-lg md:text-2xl lg:text-4xl text-gi-alabaster mx-2">
                                                Minatozaki
                                            </span>
                                        </div>
                                        <span className="flex justify-start mt-2 ml-2 text-xl text-gi-alabaster">
                                            <span className="text-sm md:text-lg text-gi-alabaster">
                                                I love u Minatozaki Sana
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
