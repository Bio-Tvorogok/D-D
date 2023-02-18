import React, { useState } from 'react';
import BurgerMenu from '../menu/BurgerMenu';
import { animated, useSpring } from 'react-spring';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuSize = useSpring({
        height: isOpen ? '400px' : '80px',
    });

    const hideLogo = useSpring({
        opacity: isOpen ? 0 : 1,
    });

    const showMenu = useSpring({
        opacity: isOpen ? 1 : 0,
    });

    return (
        <header className="body-front bg-blur fixed top-0 z-30 flex w-full justify-center">
            <animated.div
                style={menuSize}
                className=" container mx-3 mt-3 flex-col flex-wrap items-center overflow-hidden rounded-2xl bg-slate-800 bg-opacity-60 p-5 backdrop-blur-md md:mx-0 md:mt-4 md:hidden">
                <div className="title-font flex items-center font-medium text-gray-900 md:mb-0">
                    <BurgerMenu callback={setIsOpen} />
                    <animated.span
                        style={hideLogo}
                        className=" text-3xl text-white">
                        lementality
                    </animated.span>
                </div>

                <animated.div
                    style={showMenu}
                    className=" mt-7 flex flex-col items-center text-2xl text-white md:flex-row">
                    <button className="border border-transparent bg-transparent py-2 px-4 font-semibold hover:border-white md:mt-2 md:rounded">
                        Play
                    </button>
                    <button className=" mt-2 rounded border border-transparent bg-transparent py-2 px-4 font-semibold hover:border-white">
                        Community
                    </button>
                    <button className=" mt-2 rounded border border-transparent bg-transparent py-2 px-4 font-semibold hover:border-white">
                        Exchange
                    </button>
                    <button className=" mt-2 rounded border border-transparent bg-transparent py-2 px-4 font-semibold hover:border-white">
                        Help
                    </button>
                    <button className=" mt-2 rounded border border-transparent bg-transparent py-2 px-4 font-semibold hover:border-white">
                        News
                    </button>
                </animated.div>

                {/* <Inventory></Inventory> */}
            </animated.div>
        </header>
    );
};

export default Header;
