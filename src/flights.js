import react,{ useState } from 'react';
import './flightdesign.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
function Flights(){
    const [ismobile,changemobile]=useState(false);
    return (
        <>
        <img src="https://static.wixstatic.com/media/nsplsh_715f3161515f6a584c7230~mv2.jpg/v1/fill/w_1920,h_973,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_715f3161515f6a584c7230~mv2.jpg" alt="" fetchpriority="high" id="fixed"/>
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
                    <p id="text"><b>FLIGHTS</b></p>
                </bigtext>
                
            </front>
            <content>
                <textflight>
                    <p id="paraflight">AaoChalo offers B2B travel agency where travel agent can book instant and convenient air tickets for domestic and international airlines. One can book flights to all major destinations around the world.</p>
                    <p id="boldtext"><b>OUR B2B PARTNERSHIP OFFERINGS</b></p>
                    <ul>
                        <li>✔ We can provide corporate tickets</li>
                        <li>✔ Ticket cancellation available for flight bookings</li>
                        <li>✔ A credit period of 7 days post second month</li>
                        <li>✔ Special discounts from us on flight bookings every alternate month upto Rs.8000/-</li>
                        <li>✔ A direct person in contact for support for any grievances</li>
                        
                    </ul>
                </textflight>
            </content>
        </>
    )
}
export default Flights;