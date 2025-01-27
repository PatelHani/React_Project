import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaMoneyCheckAlt, FaHeart } from "react-icons/fa"
import { MdAccountBalance } from "react-icons/md"
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<FaGem />}><Link to="/dashboard">Dashboard</Link></MenuItem>
                <MenuItem icon={<FaGem />}><Link to="/dashboard/viewAccounts">Accounts</Link></MenuItem>
               
            </Menu>
            </ProSidebar>
    )
}

export default Sidebar