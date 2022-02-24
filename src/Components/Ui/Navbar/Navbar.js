import {Header} from "antd/es/layout/layout";

import {ReactComponent as Logo} from "../../../images/logo.svg";
import {Avatar, Input} from "antd";
import {
    HambergerMenu,
    LogoutCurve,
    NotificationBing,
    SearchNormal,
    Setting2,
} from "iconsax-react";
import NavButton from "../Button/NavButton";


const Navbar = props => {


    return (
        <Header className={'tw-flex tw-items-center an-navbar tw-justify-between'}>
            <div className={'tw-flex tw-items-center'}>
                <div className={'tw-inline-block tw-text-icon lg:tw-mr-3 xl:tw-mr-10'}>
                    <HambergerMenu size={30}/>
                </div>
                <div className={'tw-inline-block'}>
                    <Logo/>
                </div>
            </div>
            <div>
                <Input size={'middle'} prefix={<SearchNormal size={15}/>} placeholder={' Search'}/>
            </div>
            <div className={'nav-buttons'}>
                <NavButton >Projects</NavButton>
                <NavButton className={'tw-mr-0.5 lg:tw-mr-1 mlg:tw-mr-2 xl:tw-mr-3'}>Organization</NavButton>
                <NavButton active={true} className={'tw-mr-0.5  lg:tw-mr-1 mlg:tw-mr-2 xl:tw-mr-3'}>Home</NavButton>
            </div>
            <div className={'tw-flex'}>
                <div className={'an-header-icons tw-mr-6'}>
                    <Setting2 className={'tw-inline-block tw-mr-1  lg:tw-mr-3 mlg:tw-mr-6'}/>
                    <NotificationBing className={'tw-inline-block tw-mr-1 lg:tw-mr-3 mlg:tw-mr-6'}/>
                    <LogoutCurve className={'tw-inline-block'}/>
                </div>
                <div className={'tw-flex tw-items-center'}>
                    <div className={'tw-inline-block tw-mr-2'}>
                        <Avatar className={'tw-bg-primary-light'} src="https://joeschmoe.io/api/v1/random" />
                        {/*<Avatar className={'tw-bg-primary-light'} size="large" src="https://i.pravatar.cc/300" />*/}
                    </div>
                    <div className={'an-avatar-text tw-inline-block'}>
                        <p className={'an-avatar-text-username'}>John Doe</p>
                        <p className={'tw-m-0 tw-p-0'}>Account Holder</p>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default Navbar