import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {

   
    const dispatch = useDispatch();

const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();

}

    return (
        <div className="header" >
       

            <div className="header__left">
                <img src="https://neilpatel.com/wp-content/uploads/2017/05/LinkedIn.jpg" alt="" />

                <div className="header__search">
             <SearchIcon />
             <input type ="text" placeholder="search" />

                </div>

            </div>

            <div className="header__right">
             <HeaderOption Icon={HomeIcon} title ="Home" />
             <HeaderOption Icon={SupervisorAccountIcon} title ="My Network" />
             <HeaderOption Icon={ChatIcon} title ="Messaging" />
             <HeaderOption Icon={NotificationsIcon} title ="Notifications" />
             <HeaderOption
            avater={true}
             title="me"
             onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
