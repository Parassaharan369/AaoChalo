import react,{ useState } from 'react';
import './contactdesign.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';



function Contact(){
    const [ismobile,changemobile]=useState(false);
    return (
        <>
            <img src="https://static.wixstatic.com/media/nsplsh_e54b7a91dab046a59e359bd85181877b~mv2.jpg/v1/fill/w_1920,h_973,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_e54b7a91dab046a59e359bd85181877b~mv2.jpg"  fetchpriority="high" id="fixed"/>
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
                <p id="text"><b>CONTACT</b></p>
            </bigtext>
            
        </front>
        <grid>
            <address id="grid">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="53.5 36.5 93 127" viewBox="53.5 36.5 93 127" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-lz06h98qaot"><defs></defs><title id="svgcid-lz06h98qaot"></title>
    <g>
        <path d="M99.999 163.5l-3.25-3.895C94.986 157.487 53.5 107.468 53.5 82.916 53.5 57.323 74.359 36.5 99.999 36.5c25.644 0 46.501 20.823 46.501 46.416 0 24.551-41.483 74.571-43.252 76.688l-3.249 3.896zm0-118.56c-20.978 0-38.046 17.036-38.046 37.977 0 16.359 25.019 51.015 38.046 67.305 13.029-16.29 38.048-50.946 38.048-67.305 0-20.942-17.068-37.977-38.048-37.977z" fill="#2F54DD" data-color="1"></path>
        <path d="M99.999 101.658c-10.351 0-18.775-8.407-18.775-18.741 0-10.335 8.424-18.743 18.775-18.743 10.353 0 18.777 8.408 18.777 18.743 0 10.333-8.424 18.741-18.777 18.741zm0-29.046c-5.69 0-10.32 4.621-10.32 10.304 0 5.68 4.63 10.303 10.32 10.303 5.692 0 10.324-4.622 10.324-10.303 0-5.682-4.632-10.304-10.324-10.304z" fill="#2F54DD" data-color="1"></path>
    </g>
</svg>
                <p id="gridheading">Address</p>
                <p id="gridcontent" >B4/31 PLOT NO. 14, VALLABH VIHAR,SECTOR 13 ROHINI, DELHI- 110085</p>
            </address>
            <phone id="grid">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="38.999 39 122.001 122" viewBox="38.999 39 122.001 122" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-7b1xk5-79lwwy" id="svg2"><defs></defs><title id="svgcid-7b1xk5-79lwwy"></title>
    <g>
        <path d="M66.248 47.383c2.234 0 4.783.813 6.746 3.742 5.289 7.88 10.39 15.304 13.215 20.359.956 1.715 1.884 6.569-1.238 10.083-2.696 3.029-5.074 3.772-6.511 5.984-.985 1.524-2.11 4.931-.259 8.848 2.213 4.678 4.913 8.52 10.838 14.54 6.018 5.917 9.859 8.615 14.546 10.829 1.53.722 2.984.99 4.276.99 2.019 0 3.647-.651 4.573-1.249 2.213-1.434 2.958-3.812 5.989-6.507 1.827-1.621 4.014-2.15 5.935-2.15 1.779 0 3.33.454 4.152.916 5.057 2.82 12.484 7.919 20.372 13.203 5.532 3.707 3.515 9.499 2.736 11.32-.783 1.821-4.788 7.847-13.4 12.352-2.37 1.239-5.497 1.974-9.288 1.974-11.935 0-30.424-7.304-52.356-29.225-28.895-28.88-32.402-51.787-27.261-61.607 4.506-8.61 10.536-12.613 12.36-13.392.854-.368 2.589-1.01 4.575-1.01zm0-8.383c-3.278 0-6.106.923-7.9 1.699C54.8 42.211 47.294 47.555 41.88 57.9c-6.765 12.922-3.295 39.381 28.762 71.419C98.22 156.883 118.998 161 128.929 161c5.024 0 9.457-.987 13.175-2.93 10.331-5.404 15.687-12.899 17.222-16.475 3.579-8.37 1.312-16.839-5.772-21.589-1.216-.813-2.421-1.623-3.606-2.42-6.566-4.414-12.769-8.585-17.35-11.141-2.239-1.252-5.244-1.975-8.238-1.977-4.382 0-8.36 1.473-11.504 4.264-2.088 1.855-3.389 3.574-4.34 4.827-.196.259-.44.582-.628.813h-.027c-.197 0-.43-.062-.694-.187-3.482-1.644-6.597-3.675-12.199-9.178-5.508-5.6-7.54-8.714-9.185-12.193-.152-.321-.191-.558-.189-.718.231-.188.557-.433.817-.63 1.255-.95 2.973-2.249 4.826-4.33 5.306-5.974 5.143-14.623 2.3-19.731-2.579-4.614-6.782-10.857-11.234-17.465-.772-1.148-1.557-2.312-2.346-3.487C76.736 41.648 71.866 39 66.248 39z" fill="#2F54DD" data-color="1"></path>
    </g>
</svg>
                <p id="gridheading">Phone</p>
                <p id="gridcontent"><b>+91-9999-05-9898</b></p>
            </phone>
            <email id="grid">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="35 56 130 88" viewBox="35 56 130 88" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--otg6uh6x55xq"><defs></defs><title id="svgcid--otg6uh6x55xq"></title>
    <g>
        <path d="M35 56v88h130V56H35zm64.879 58.87L49.15 64.499h101.455L99.879 114.87zM72.191 99.311l-28.755 30.025V70.757l28.755 28.554zm6.009 5.967l21.679 21.525 21.677-21.525 28.93 30.224H49.254L78.2 105.278zm49.364-5.967l29-28.796v59.092l-29-30.296z" fill="#2F54DD" data-color="1"></path>
    </g>
</svg>
                <p id="gridheading">Email</p>
                
                <p id="gridcontent">TRAVEL@BESTINTERNATIONALTOUR.COM</p>
            </email>
        </grid>
        <div id="locations">
            <div id="otherloc">
                <p id="p1">Other Locations</p>
                <p id="p2contact">__</p>
            </div>
            <div id="locpic">
                <delhi id="locsec">
                <img src="https://static.wixstatic.com/media/8b7396_8e2a801232684322a9eb0ff4a3c6bf07~mv2.webp" alt="New-Delhi-India-War-Memorial-arch-Sir.webp"  fetchpriority="high"/>
                <p><i>Delhi</i></p>
                <address>807 - VISHWA DEEP TOWER, DISTRICT CENTRE JANAKPURI, NEW DELHI-110058</address>
                </delhi>
                <kolkata id="locsec">
                <img src="https://static.wixstatic.com/media/8b7396_7c8968fd657c4d618c0684b4a6826a9a~mv2.webp" alt="Victoria-Memorial-Hall-Kolkata-India.webp"  fetchpriority="high"/>
                <p><i>Kolkata</i></p>
                <address>198, DAKSHINDARI ROAD, OPP. INDRAGNDHI SCHOOL, SHRIBHUMI, KOLKATA-700048</address>
                </kolkata>
                <indore id="locsec">
                <img src="https://static.wixstatic.com/media/8b7396_036a3b8e254f45b293bd962e6a828024~mv2.jpg/v1/fill/w_346,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Indore_Rajwada01.jpg" alt="Indore_Rajwada01.jpg" srcset="https://static.wixstatic.com/media/8b7396_036a3b8e254f45b293bd962e6a828024~mv2.jpg/v1/fill/w_346,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Indore_Rajwada01.jpg" fetchpriority="high"/>
                
                <p><i>Indore</i></p>
                <address>N-83 ANOOP NAGAR, INDORE, MADHYA PRADESH-452011 INDIA</address>
                </indore>
                <mumbai id="locsec">
                <img src="https://static.wixstatic.com/media/8b7396_700b941898b5420b82d2ceca1e95688a~mv2.jpg/v1/fill/w_317,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image.jpg" alt="image.jpg"  srcset="https://static.wixstatic.com/media/8b7396_700b941898b5420b82d2ceca1e95688a~mv2.jpg/v1/fill/w_317,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image.jpg" fetchpriority="high"></img>
                <p><i>Mumbai</i></p>
                <address>SHOP NO.6, SHIVAM SQUARE, SHREE TIRUPATI BALAJI, CHS BLDG.4SAHAR ROAD, KOLDONGRI, ANDHERI EAST, MUMBAI - 400069</address>
                </mumbai>
            </div>
        </div>
        <div id="forms">
        <form>
        <insidediv>
            <h5>Get a Price Quote</h5>
            
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="e.g., Emily"></input>
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="e.g., name@example.com" required></input>
            <div id="label1">
                <div>
                <label htmlFor="code" >Code</label>
                
                <select id="code" name="code">
                    <option value="option1">IN</option>
                    <option value="option2">IO</option>
                    <option value="option3">HW</option>
                </select>
                </div>
                <div id="phone">
                <label htmlFor="phone" >Phone</label>
                <input type="digit" id="phone" email="phone" placeholder="e.g., 555-555-555"></input>
                </div>
            </div>
            <label for="booking">Select Booking Type</label>
            <select id="booking" name="booking">
                <option value="" disabled selected>Choose an option</option>
                <option value="option1">Flights</option>
                <option value="option2">Trains</option>
            </select>
            <label for="date">Select a date:</label>
            <input type="date" id="date" name="date" placeholder=""/>
            <label for="time">Prefered Travel Time</label>
            <input type="time" id="time" name="time"></input>
            <label for="travelfrom">Travel From</label>
            <input type="text" id="travelfrom" name="travelfrom" placeholder="Source"></input>
            <label for="travelto">Travel To</label>
            <input type="text" id="travelto" name="travelto" placeholder="Destination"></input>
            <input type="submit" value="Request a Quote"></input>
        </insidediv>
        </form>
        </div>
    </>
    );
}
export default Contact;