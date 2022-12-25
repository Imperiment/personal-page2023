import React, {useState} from 'react';

function Header() {
    const [isActive, setActive] = useState("false");
    const [theme, setTheme] = useState('header-lightmode');
    const handleToggle = ()=> {
        setActive(!isActive);
        if (theme === 'header-lightmode') {
            setTheme('header-darkmode');
            document.body.style.backgroundColor = '#121111';
        } else {
            setTheme('header-lightmode');
            document.body.style.backgroundColor = '#FFFFFF';
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