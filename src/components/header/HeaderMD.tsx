import React, { useState } from 'react';
const HeaderMD = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" body-front bg-blur fixed top-0 z-30 hidden w-full justify-center md:flex">
            <div className=" container mx-3 mt-3 flex-col flex-wrap items-center justify-center overflow-hidden rounded-2xl bg-slate-800 bg-opacity-60 p-5 backdrop-blur-md md:mx-0 md:mt-4 md:flex md:flex-row">
                <div className="title-font flex items-center font-medium text-gray-900 md:mb-0">
                    <span className=" text-3xl text-white">D&D</span>
                </div>
            </div>
        </header>
    );
};

export default HeaderMD;
