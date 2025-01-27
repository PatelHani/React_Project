import React, { useState } from "react";
import {FaUserAlt, FaMoneyBillAlt} from "react-icons/fa";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SubMenu
} from "react-pro-sidebar";
import {
    FiArrowLeftCircle,
    FiArrowRightCircle,
    FiLogOut,
} from "react-icons/fi";
import { MdDashboard, MdAddShoppingCart } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { IoMdPeople } from 'react-icons/io'
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

function SideBar2({ rtl }) {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [handleToggleSidebar,setHandleTogglerSideBar] = useState(false)
    const [toggled, setToggled] = useState()
   
    const headerStyle = {
        padding: '20px',
        letterSpacing: "1px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        backgroundColor: "#fff",
        transition: "all 0.3s linear"
    };
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <div className="SideBar2">

            <ProSidebar
                collapsed={menuCollapse}
                rtl={rtl}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
               
            >
                <SidebarHeader style={headerStyle}>
                    <div className="logotext ">
                        {menuCollapse ? (
                            <FiArrowRightCircle className="fs-3 d-md-block d-none" onClick={menuIconClick} />
                        ) : (
                            <div className="d-flex justify-content-between">
                                <p className="text-primary fs-5 fw-bold">Dashboard</p>
                                <p> <FiArrowLeftCircle className="fs-3 d-md-block d-none" onClick={menuIconClick} /></p>
                            </div>
                        )
                        }
                    </div>
                </SidebarHeader>
                <SidebarContent className="bg-white">
                    <Menu iconShape="circle">
                        <MenuItem icon={<MdDashboard />}>
                            <Link to="/dashboard">Dashboard</Link>
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FaUserAlt />}>
                            <Link to="/dashboard/viewAccounts">Accounts</Link>
                        </MenuItem>
                    </Menu>
                   
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}
export default SideBar2;