import React from 'react';
import {
    Brend,
    Li,
    SideMenu,
    Side,
    LogOut,
} from "./SideStyled";
import {NavLink} from "react-router-dom";
import {IoIosExit} from "react-icons/io";
import {FaShoppingCart,FaBox} from 'react-icons/fa'
import Logo from './Untitled-1.png'     // Logo

function Sider({Logout}) {
    return(

            <Side>
                <Brend>
                    <h2> <img src={Logo} width={180} height={80}   alt=""/> </h2>
                </Brend>
                <SideMenu>
                    <ul >


                        <NavLink to={'/'}  exact className={'main-nav'} activeClassName={'main-nav-active'}>
                            <Li>
                                <i className="bi bi-grid-fill"> </i>
                                <span>Dashboard</span>
                            </Li>
                        </NavLink>

                        <NavLink to={'/orders'}  exact className={'main-nav '} activeClassName={'main-nav-active'}>
                            <Li>
                                <i> <FaBox/> </i>
                                <span>Orders</span>
                            </Li>
                        </NavLink>

                        <NavLink to={'/products'}  exact className={'main-nav '} activeClassName={'main-nav-active'}>
                            <Li>
                                <i className="bi bi-bag-check-fill"> </i>
                                <span>Products</span>
                            </Li>
                        </NavLink>

                        <NavLink to={'/create'}  exact className={'main-nav '} activeClassName={'main-nav-active'}>
                            <Li>
                                <i className="bi bi-plus-square-fill"> </i>
                                <span>Create</span>
                            </Li>
                        </NavLink>

                        <NavLink to={'/sales'}  exact className={'main-nav '} activeClassName={'main-nav-active'}>
                            <Li>
                                <i><FaShoppingCart/> </i>
                                <span> Sales </span>
                            </Li>
                        </NavLink>



                        <NavLink to={'/history'}  exact className={'main-nav '} activeClassName={'main-nav-active'}>
                            <Li>
                                <i className="bi bi-file-text-fill"> </i>
                                <span>History</span>
                            </Li>
                        </NavLink>


                    </ul>

                </SideMenu>
                <div onClick={Logout}>
                    <NavLink to={'./'}  exact className={'main-nav '} activeClassName={'main-nav-active'}>
                        <LogOut>
                            <IoIosExit className={'logIcon'}/>
                            <span>LogOut</span>
                        </LogOut>
                    </NavLink>
                </div>
            </Side>



    )
}
export default Sider