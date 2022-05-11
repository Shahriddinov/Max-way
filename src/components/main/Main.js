import React from 'react';
import "./Main.scss"
function Main(props) {
    return (

            <div className="row">
                <div className="col-md-9 offset-1 d-flex main">
                    <div className="main_left">
                        <div className="main_left_title">
                            Siz izlagan mazzali ta’mlar
                        </div>
                        <div className="main_left_test">
                            When an unknown printer took a galley of type
                            scrambled it to make a type specimen
                        </div>
                       <div className="d-flex">
                           <div className="main_left_box">
                               <div className="main_left_box_new">
                                   <img src="./images/copy.png" alt=""/>
                                   <span>Yangi</span>
                               </div>
                           </div>
                           <div className="main_left_box">
                               <div className="main_left_box_new"  style={{
                                   width:"174px"
                               }}>
                                   <img src="./images/copy1.png" alt=""/>
                                   <span>ko'p sotilganlar</span>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div className="main_right">
                        <img className="main_right_img" src="./images/Bitmap.png" alt=""/>
                    </div>
                </div>
            </div>


    );
}

export default Main;

