import React from 'react';
import Search from './Search';

const Navbar = ({searchTerm, onType}) => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Search searchTerm={searchTerm} onType={onType} />
        </div>
    )
}

export default Navbar;