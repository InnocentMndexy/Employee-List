import React from 'react';
import { Link } from "react-router-dom";
//import React, { useState, useEffect } from "react";
//import { Axios } from 'axios';

function Profile() {
    return (

        //const [newInfo, setNewInfo] = useState('');


        <div>

            <div className="full-page">
                <div className="header">
                    <nav>
                        <ul id='MenuItems'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/About'>About Us</Link></li>
                            <li><Link to='/Services'>Services</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                            <li><Link to='/log'>Log in</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
            {employeeList.map((val, key) =>{
                
                <div key={key} class="box">
                <center>
                <img src="../images/icons.jpg" alt=""></img>
                <input type="file" id="file" name="image" accept="image/*" /><br /><br />
                <label for="file">Change Picture</label><br /><br /><br />
                <input type="text" placeholder="Name" name="" />
                <input type="text" placeholder="User Name" name="" />
                <input type="Email" placeholder="Email ID" name="" />
                <input type="password" placeholder="Password" name="" />
                <button>Delete </button>
                <button>update</button>
                </center>
            </div>
            })}
            
        </div>

    );
}


export default Profile;


{/* <input type="number" placeholder="Phone Number" name="" />
                <input type="text" placeholder="Date of Birth" name="" />
                <input type="text" name="" placeholder="Gender" /> */}