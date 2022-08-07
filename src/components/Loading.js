import React from "react";

function Loading() {
    return (
        <div className="h-screen w-full flex items-center justify-center px-6">
            <img className="h-16" src="assets/loader.svg" alt="Loading..." />
        </div>
    );
}

export default Loading;
