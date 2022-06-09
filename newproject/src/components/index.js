import React from 'react';
import {Link} from "react-router-dom";


function Log(){
    return(
        <div class="full-page">
            <div class="header">
                <nav>
                    <ul id='MenuItems'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About Us</Link></li>
                        <li><Link to='/Services'>Services</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/log'>Log in</Link></li>
                    </ul>
                </nav>

                <div>
                    <h1>Explore Mpumalanga</h1>
                </div>
            </div>
     </div>
    )
}

export default Log;