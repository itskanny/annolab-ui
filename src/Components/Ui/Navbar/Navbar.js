import {Header} from "antd/es/layout/layout";

import {ReactComponent as Logo} from "../../../images/logo.svg";
import {Avatar, Button, Input, Popover, Tooltip} from "antd";
import {
    LogoutCurve,
    NotificationBing,
    SearchNormal,
    Setting2,
} from "iconsax-react";
import NavButton from "../Button/NavButton";
import {authStore} from "../../../store/AuthStore";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import animationData from '../../../images/lotties/no-notification.json'
import CustomizedEmpty from "../../../helpers/CustomizedEmpty";



const Navbar = () => {

    const NavbarObserved = observer(({auth}) => {
        return (
            <>
                <div className={'tw-flex tw-items-center'}>
                    {/*{*/}
                    {/*    auth.isLoggedIn ?*/}
                    {/*        <div className={'tw-inline-block tw-text-icon lg:tw-mr-3 xl:tw-mr-10'}>*/}
                    {/*            <HambergerMenu size={30}/>*/}
                    {/*        </div>*/}
                    {/*        : ""*/}
                    {/*}*/}


                    <div className={'tw-inline-block'}>
                        <Link to={'/home'}>
                            <Logo/>
                        </Link>
                    </div>


                </div>
                {
                    auth.isLoggedIn && !auth.setup ?
                        <div>
                            <Input size={'middle'} prefix={<SearchNormal size={15}/>} placeholder={' Search'}/>
                        </div>
                        : ""

                }

                {
                    auth.isLoggedIn && !auth.setup ?
                        <div className={'nav-buttons'}>
                            <NavButton>Projects</NavButton>
                            <NavButton
                                className={'tw-mr-0.5 lg:tw-mr-1 mlg:tw-mr-2 xl:tw-mr-3'}>Organization</NavButton>
                            <NavButton active={true}
                                       className={'tw-mr-0.5  lg:tw-mr-1 mlg:tw-mr-2 xl:tw-mr-3 '}>Home</NavButton>
                        </div>
                        : ""
                }

                <div className={'tw-flex'}>
                    {
                        auth.isLoggedIn ?
                            <>
                                <div className={'an-header-icons tw-mr-6'}>
                                    {
                                        !auth.setup ?
                                            <>
                                                <Tooltip title={'Settings'} color={'white'} style={{color: "black"}}>
                                                    <Setting2
                                                        className={'tw-inline-block tw-mr-1  lg:tw-mr-3 mlg:tw-mr-6 tw-cursor-pointer'}/>
                                                </Tooltip>
                                                <Tooltip title={'Notifications'} color={'white'} style={{color: "black"}}>
                                                    <Popover
                                                        content={<CustomizedEmpty description={'No notifications found'}
                                                                                  lottieAnimation={animationData}/>}
                                                        title={'Notifications'}
                                                        trigger={"click"}
                                                    >
                                                        <NotificationBing
                                                            className={'tw-inline-block tw-mr-1 lg:tw-mr-3 mlg:tw-mr-6 tw-cursor-pointer'}/>
                                                    </Popover>
                                                </Tooltip>
                                            </>

                                            : ""
                                    }
                                    <Tooltip title={'Logout'} color={'white'} style={{color: "black"}}>
                                        <LogoutCurve className={'tw-inline-block tw-cursor-pointer'} onClick={logout}/>
                                    </Tooltip>
                                </div>
                                <div className={'tw-flex tw-items-center'}>
                                    <div className={'tw-inline-block tw-mr-2'}>
                                        <Avatar className={'tw-bg-primary-light'} src={auth.user.getAvatar}/>
                                        {/*<Avatar className={'tw-bg-primary-light'} size="large" src="https://i.pravatar.cc/300" />*/}
                                    </div>
                                    <div className={'an-avatar-text tw-inline-block'}>
                                        <p className={'an-avatar-text-username'}>{auth.user.getName}</p>
                                        <p className={'tw-m-0 tw-p-0'}>Account Holder</p>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <Link to={'/signup'}><NavButton active={true}
                                                                className={'tw-mr-5'}>SignUp</NavButton></Link>
                                <Link to={'/login'}><Button type={"primary"}>Login</Button></Link>
                            </>

                    }

                </div>
            </>
        )
    })

    const logout = () => {
        authStore.removeToken()
    }
    return (
        <Header className={'tw-flex tw-items-center an-navbar tw-justify-between'}>
            <NavbarObserved auth={authStore}/>
        </Header>
    )
}

export default Navbar