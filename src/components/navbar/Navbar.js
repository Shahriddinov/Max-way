import React from 'react';
import "./navbar.scss"
import Main from "../main/Main";
function Navbar(props) {
    return (
        <div>
            <div className="container-fluid navbar">
                <div className="row">
                    <div className="col-md-9 offset-1 navbar_item">
                        <img className="navbar_img" src="./images/logo.png" alt=""/>
                        <div className="navbar_header">
                            <ul  className="navbar_header">
                                <li>Menu</li>
                                <li>Bolalar uchun</li>
                                <li>Filiallar</li>

                            </ul>

                        </div>

                        <div className="d-flex">
                            <div className="navbar_item_right">
                                <img className="navbar_item_right_img" src="./images/Shape.png" alt=""/>
                                <div className="navbar_item_right_number">

                                    <span>(9989)</span> <br/>
                                    942334433
                                </div>

                            </div>
                            <div className="navbar_item_right_line"></div>
                            <div className="navbar_left d-flex">
                                <img className="navbar_item_left_img w-100" src="./images/shop.png" alt=""/>
                                <div className="navbar_item_left_number">
                                    Korzinka <br/>

                                    <span>125,400 UZS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Main/>
            </div>

        </div>

    );
}

export default Navbar;
