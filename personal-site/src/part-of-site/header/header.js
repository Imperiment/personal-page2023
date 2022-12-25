import React, {useState} from 'react';

function Header() {
    const [isActive, setActive] = useState("false");
    const [theme, setTheme] = useState('header-lightmode');
    const lightmode = '#fdf7ee';
    const darkmode = '#323030';
    const font__dark = '#FFF';
    const font__light = '#2e2d2d';
    const handleToggle = ()=> {
        setActive(!isActive);
        if (theme === 'header-lightmode') {
            setTheme('header-darkmode');
            document.body.style.backgroundColor = '#121111';
            document.documentElement.style.setProperty('--main-clr', darkmode);
            document.documentElement.style.setProperty('--main-font', font__dark);
        } else {
            setTheme('header-lightmode');
            document.body.style.backgroundColor = '#FFFFFF';
            document.documentElement.style.setProperty('--main-clr', lightmode);
            document.documentElement.style.setProperty('--main-font', font__light);
        }
    };
    return (
        <header className={`${theme}`}>
            <h1>Imperiment</h1>
            {/* Icons for shizz */}
            <div>
                <a href="https://www.twitch.tv/imperiment" target='_blank' rel="noreferrer"><i className={`fa-brands fa-twitch fa-xl`}></i></a>
                <a href="https://github.com/Imperiment" target='_blank' rel="noreferrer"><i className={`fa-brands fa-github fa-xl`}></i></a>
                <span onClick={handleToggle}><i className={isActive ? "fa-solid fa-sun fa-xl": "fa-solid fa-moon fa-xl"}></i></span>
            </div>
        </header>
        
    );
}

export default Header;