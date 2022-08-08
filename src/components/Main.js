import React from "react";

function Main(props) {
    return (
        <>
            <input
                type="text"
                className={
                    "rounded-md outline-none text-center text-" +
                    (props.textSize == null ? "xl" : props.textSize) +
                    " shadow-lg shadow-inner text-gi-alabaster bg-[#1d1c22] border-[1px] h-12 w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 mx-1 border-gi-police-blue transition-all hover:border-[#4b5a73] focus:border-[#4b5a73]"
                }
                placeholder="Enter UID..."
                onKeyPress={(e) => {
                    !/[0-9]/.test(e.key) && e.preventDefault();
                }}
                onChange={(e) => {
                    props.onChange(e.target.value);
                }}
                maxLength={9}
            />
            <button
                className={
                    "text-xl text-gi-alabaster border-gi-police-blue border-[1px] w-12 h-12 rounded-md mx-1 transition-all hover:bg-gi-police-blue"
                }
                onClick={(e) => {
                    props.onClick();
                }}
            >
                <span className="mx-4">{">"}</span>
            </button>
        </>
    );
}

export default Main;
