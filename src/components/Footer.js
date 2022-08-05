import React from "react";

function Footer() {
    return (
        <div className="inset-x-0 absolute bottom-0 mb-10">
            <span className="text-white">
                No copyright infringement of any sort is intended. All assets
                used such as images and fonts belong to{" "}
                <a
                    href="https://www.mihoyo.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Mihoyo
                </a>{" "}
                /{" "}
                <a
                    href="https://www.hoyoverse.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Hoyoverse
                </a>
                .
            </span>
        </div>
    );
}

export default Footer;
