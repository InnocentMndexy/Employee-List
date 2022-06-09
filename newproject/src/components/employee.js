import React from 'react';
import { Link } from "react-router-dom";
import empcss from './Employee.module.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Emp() {
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {

        Axios.get("http://localhost:27017/read").then((response) => {
            setEmployeeList(response.data);
        })

    }, []);
    return (

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

            <div className={empcss.wrapperemp}>
                <div className={empcss.sepemp}>
                    <h3>Welcome</h3>
                </div>


                <div className={empcss.headeremp}>
                    <h3>Our Team Members</h3>

                    {employeeList.map((val, key) => {
                        return (
                            <div key={key}>
                                 <div className={empcss.box} >
                                <section className={empcss.containeremp} >
                                    <div className={empcss.teamemp}>
                                        <div className={empcss.teammembersemp}>

                                            <h4>{val.empName}</h4>
                                            <h4>{val.empUsername}</h4>
                                            <p>Manager</p>
                                            <Link to="/profile">View Profile</Link>
                                            
                                        </div>
                                    </div>
                                </section>
                            </div>
                            </div>
                           
                        )
                    })}

                </div>
            </div>
        </div>

    );
}

export default Emp;

{/* <div className={empcss.teamemp}>
                                <div className={empcss.teammembersemp}>
                                    <h4>Mandla Mkhize</h4>
                                    <p>CEO</p>
                                    <Link to="/profile">View Profile</Link>
                                </div>
                            </div>

                            <div className={empcss.teamemp}>
                                <div className={empcss.teammembersemp}>
                                    <h4>John Smith</h4>
                                    <p>The Reservation Agent</p>
                                    <Link to="/profile">View Profile</Link>
                                </div>
                            </div>

                            <div className={empcss.teamemp}>
                                <div className={empcss.teammembersemp}>
                                    <h4>Carol Brown</h4>
                                    <p>Photographer</p>
                                    <Link to="/profile">View Profile</Link>
                                </div>
                            </div>


                            <div className={empcss.teamemp}>
                                <div className={empcss.teammembersemp} >
                                    <h4>Sihle Mhlanga</h4>
                                    <p>Tour Guider</p>
                                    <Link to="/profile">View Profile</Link>
                                </div>
                            </div>


                            <div className={empcss.teamemp}>
                                <div className={empcss.teammembersemp}>
                                    <h4>Rossi Nkosi</h4>
                                    <p>Receptionist</p>
                                    <Link to="/profile">View Profile</Link>
                                </div>
                            </div> */}