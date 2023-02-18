import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

type IBurgerProps = {
    callback: (isOpen: boolean) => void;
};

function BurgerMenu({ callback }: IBurgerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleClick = (isOpen: boolean) => {
        setIsOpen(isOpen);
        callback(isOpen);
    };

    const first = useSpring({
        transform: isOpen
            ? 'translate(3px, 5px) rotate(45deg)'
            : 'translate(2px, 4px) rotate(0deg)',
        width: isOpen ? '40' : '25',
    });
    const second = useSpring({
        transform: isOpen
            ? 'translate(2px, 5px) rotate(45deg)'
            : 'translate(2px, 18px) rotate(0deg)',
        width: isOpen ? '40' : '25',
    });
    const third = useSpring({
        transform: isOpen
            ? 'translate(0px, 34px) rotate(-45deg)'
            : 'translate(2px, 32px) rotate(0deg)',
        width: isOpen ? '40' : '25',
    });

    return (
        <div>
            <svg
                onClick={() => toggleClick(!isOpen)}
                width="40"
                height="40"
                viewBox="0 0 44 44"
                fill="#fafafa"
                xmlns="http://www.w3.org/2000/svg">
                <animated.rect width="25" height="4" rx="2" style={first} />
                <animated.rect width="25" height="4" rx="2" style={second} />
                <animated.rect width="25" height="4" rx="2" style={third} />
            </svg>
        </div>
    );
}

export default BurgerMenu;
