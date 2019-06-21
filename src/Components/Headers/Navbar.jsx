import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    redner() {
        return (
            <header>
                <ul id="NavbarButton">
                    <li className="navButton"><Link to="">Home</Link></li>
                </ul>
            </header>
        )
    }
}


export default Navbar;