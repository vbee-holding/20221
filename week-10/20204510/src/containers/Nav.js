import { NavLink } from 'react-router-dom';
import Link from '../constants/Link';
import '../style/Nav.scss'

const Nav = () => {
    return (
        <>
            <div className="header">
                <img src={Link.link_img_header} className="header-img" alt='navimg' />
                <div className="header-intro">
                    <div className="title">HỆ THỐNG QUẢN TRỊ ĐẠI HỌC TRỰC TUYẾN</div>
                    <div className="school-name">ĐẠI HỌC BÁCH KHOA HÀ NỘI</div>
                </div>
            </div>
            <div className="topnav">
                <NavLink activeclassname="active" to="/">Trang chủ</NavLink>
            </div>
        </>
    )
}

export default Nav;
