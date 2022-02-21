import {Button} from "antd";

const NavButton = props => {

    return <Button type={'text'} className={`an-navbar-button ${props.active && 'an-navbar-button-active'} ${props.className}` }>{props.children}</Button>
}

export default NavButton