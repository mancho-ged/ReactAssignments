import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const searchBar = <input className="search-bar" placeholder="Hello" />;
const Heading2 = () => {
    return (
        <div className="headings">
            <h1 className="logo">Namaste React</h1>
            <h2>Heading 2 here as functional component</h2>
        </div>
    );
};

const header = (<header className="header">
    <Heading2 />
    { searchBar }
    {console.log(1+2)}
    <div className="user">
        <FontAwesomeIcon icon={solid('user')} className="user-icon" beat />
        Hello user!
    </div>
</header>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);