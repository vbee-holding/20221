import '../style/Nav.scss'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="header">
                <img src="https://storage.googleapis.com/hust-files/5807675312963584/images/hust-logo-official_.3m.jpeg" className="header-img" alt='navimg' />
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

