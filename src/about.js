import react,{ useState } from 'react';
import './aboutdesign.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
function About(){
    const [ismobile,changemobile]=useState(false);
    return (
        <>
        <img src="https://static.wixstatic.com/media/nsplsh_5f67315764634b63563377~mv2_d_5590_4000_s_4_2.jpg/v1/fill/w_1920,h_973,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_5f67315764634b63563377~mv2_d_5590_4000_s_4_2.jpg" alt="" id="fixed"/>
            <front>
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
                <bigtextabout>
                    <p id="text"><b>ABOUT</b></p>
                </bigtextabout>
                
            </front>
            <contentabout>
                <textabout>
                    <p1>AaoChalo is a unit of Best International Tour which was founded in the year 2020. The inspiration behind this venture is looking at travelers’ problems during the pandemic COVID-19. Online travel portals & other travel agents were charging an enormous amount of money & taking advantage of needy people, who really want to travel at any cost to save someone’s life or to save themselves, especially by air. The founders of Best International Tour Mr. Deepanshu Jain and Mr. Himanshu Jain, wanted to help such people & started Best International Tour, keeping in mind that BIT will not take any advantage of travelers, however, will try to convert disadvantage of other online travel portals & tour booking agents into an advantage, to benefit them monetarily.</p1>
                    <p2>Hence this way following air travel disadvantages are converted by BIT to advantages, which saves a remarkable amount of money of any traveler keeping his or her travel ease & in budget.</p2>
                    <img src="https://static.wixstatic.com/media/8b7396_b8a3b399b4c546f29ff329254cce3ac4~mv2.png/v1/crop/x_3,y_3,w_2055,h_1125/fill/w_798,h_436,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-05-01%20at%205_02_46%20PM.png" alt="Benefits with AaoChalo" srcset="https://static.wixstatic.com/media/8b7396_b8a3b399b4c546f29ff329254cce3ac4~mv2.png/v1/crop/x_3,y_3,w_2055,h_1125/fill/w_798,h_436,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-05-01%20at%205_02_46%20PM.png" fetchpriority="high" id="chart"></img>
                </textabout>
                <ourteam>
                    <p id="ourteam">Our Team.</p>
                    <ourteamdiv>
                    <himjain>
                        <img src="https://static.wixstatic.com/media/8b7396_e733e1b29d5b44bab73296d5e807fc34~mv2.jpeg/v1/crop/x_149,y_0,w_635,h_715/fill/w_359,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-05-01%20at%204_55_21%20PM.jpeg" alt="Himanshu Jain" fetchpriority="high"/>
                        <himname>
                            <p id="name">Himanshu Jain</p>
                            <p>Director</p>
                        </himname>
                    </himjain>
                    <dipjain>
                        <img src="https://static.wixstatic.com/media/8b7396_fb05347a233e4b4ba078be004a87016c~mv2.jpeg/v1/crop/x_80,y_88,w_518,h_583/fill/w_359,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-05-01%20at%205_32_45%20PM.jpeg" alt="Deepanshu Jain" fetchpriority="high"/>
                        <dipname>
                            <p id="name">Deepanshu Jain</p>
                            <p>Director</p>
                        </dipname>
                    </dipjain>
                    </ourteamdiv>
                </ourteam>
            </contentabout>
        </>
    )
}
export default About;