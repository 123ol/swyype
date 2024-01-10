import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { MdReplay, MdDashboard, MdApi } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import logo from "../imgs/swyype white png 1.svg";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <MdDashboard />
        },
        {
            path: "/transactions",
            name: "Transactions",
            icon: <MdReplay />
        },
        {
            path: "/api",
            name: "API",
            icon: <MdApi />
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <FaUserAlt />
        },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <img src={logo} alt="Logo" onClick={toggle} />
                    </div>
                    <div style={{ marginLeft: isOpen ? "50px" : "10px", marginBottom: "1rem" }} className="bars">
    {isOpen ? (
        <FaRegWindowClose onClick={toggle} />
    ) : (
        <FaBars onClick={toggle} /> // Change this line to the 'Close' icon you want to use
    )}
</div>
                </div>
              
                <div className='line'></div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                 <NavLink to="/Login" className="link logout">
                <div className="icon"><IoIosLogOut /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Log out</div>
            </NavLink>
            </div>
            <main>{children}</main>
           
        </div>
    );
};

export default Sidebar;
