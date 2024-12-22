import react,{ useState } from 'react';
import React, { Component } from 'react'
import './design.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
function Front(){
    const [ismobile,changemobile]=useState(false);
  return (
    <>
            <video id="pageBackground_c1dmp_video" class="K8MSra" role="presentation" crossorigin="anonymous" playsinline="" preload="auto" muted="" loop tabindex="-1" autoplay="" src="https://video.wixstatic.com/video/11062b_031d21ae8d4b4e7c9878958f5ddaff5b/1080p/mp4/file.mp4"></video>
            <frontfront>
                    <header>
                    <div>
                    <img src="https://static.wixstatic.com/media/8b7396_8269e2d5b8f14538956e3c4c85e31bea~mv2.png/v1/crop/x_204,y_168,w_655,h_540/fill/w_116,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" alt="AaoChalo Logo" srcset="https://static.wixstatic.com/media/8b7396_8269e2d5b8f14538956e3c4c85e31bea~mv2.png/v1/crop/x_204,y_168,w_655,h_540/fill/w_116,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" fetchpriority="high" id="topicon" />
                    <Link to="/" id="piclink"><img src="https://static.wixstatic.com/media/8b7396_7049d92c884c425882718caa02f97e61~mv2.png/v1/crop/x_41,y_209,w_425,h_93/fill/w_280,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AAO%20Chalo.png" alt="AaoChalo Text Logo"  srcset="https://static.wixstatic.com/media/8b7396_7049d92c884c425882718caa02f97e61~mv2.png/v1/crop/x_41,y_209,w_425,h_93/fill/w_280,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AAO%20Chalo.png" fetchpriority="high" id="aaochaloimg"/></Link>
                    </div>
                    <button id="dropdown" onClick={()=>changemobile(!ismobile)}><FaBars/></button>
                    <ul id={ismobile? "hidden":""}>
                        <li><Link to="/Flights" class="link"> Flights </Link></li>
                        <li><Link to="/Trains" class="link"> Trains </Link></li>
                        <li><Link to="/Hotels" class="link"> Hotels </Link></li>
                        <li><Link to="/Visa" class="link"> Visa </Link></li>
                        <li><Link to="/About" class="link"> About </Link></li>
                        <li><Link to="/Contact" class="link">Contact</Link></li>
                        <li><Link to="/Blog" class="link">Blog</Link></li>
                    </ul>
                </header>
                    <bigtextfront>
                        <p id="textfront">Single Stop Solution For All Your Travel Needs</p>
                    </bigtextfront>
                    <twocards>
                        <card1>
                            <p id="cardtext">CALL US</p>
                            <p id="cardtext2">+91-9999-05-9898</p>
                        </card1>
                        <card2>
                            <p id="cardtext">START ONLINE</p>
                            <p id="cardtext2">Get a free quote in seconds</p>
                        </card2>
                    </twocards>
            </frontfront>
            <sections>
            <section1>
               
                <p id="flights"><Link to="/Flights" id="flights">FLIGHTS</Link></p>
            </section1>
            <section2>
                
                <p id="flights"><Link to="/Trains" id="flights">TRAINS</Link></p>
            </section2>
            <section3>
                
            <p id="flights"><Link to="/Flights" id="flights">HOTELS</Link></p>
            </section3>
            <section4>
               
            <p id="flights"><Link to="/Flights" id="flights">VISA</Link></p>
            </section4>
            <section5>
                
            <p id="flights"><Link to="/Flights" id="flights">ABOUT</Link></p>
            </section5>
            <section6>
                
                <p id="flights">CONTACT</p>
            </section6>
        </sections>
    </>
  );
}
export default Front;