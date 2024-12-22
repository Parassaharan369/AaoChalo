import react,{ useState } from 'react';
import './traindesign.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
function Train(){
    const [ismobile,changemobile]=useState(false);
    return (
        <>
        <img src="https://static.wixstatic.com/media/nsplsh_356f334f44785251436649~mv2_d_3648_2736_s_4_2.jpg/v1/fill/w_1920,h_973,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_356f334f44785251436649~mv2_d_3648_2736_s_4_2.jpg" alt="" fetchpriority="high" id="fixed"/>
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
                <bigtext>
                    <p id="text"><b>TRAINS</b></p>
                </bigtext>
                
            </front>
            <contenttrain>
                <texttrain>
                    <p>AaoChalo, a principal agent of IRCTC is authorized to make IRCTC ticket agents all over India, providing unique opportunity to people desirous to start their own railway ticket booking business</p>
                </texttrain>
            </contenttrain>
        </>
    )
}
export default Train;