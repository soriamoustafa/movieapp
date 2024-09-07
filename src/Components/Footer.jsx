import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="foot">
            <div className='row'>
                <div className='col-4'>
                    <h2><span>M</span>ovies</h2>
                    <p>© 2024. All rights reserved.</p>
                </div>
                <div className='col-4'>
                    <ul>
                        <li><a href='#'>MAIN</a></li>
                        <li><a href='#'>SHCEDULES</a></li>
                        <li><a href='#'>NEW</a></li>
                        <li><a href='#'>CONTACT</a></li>
                    </ul>
                </div>
                <div className='col-4'>
                    <ul style={{justifyContent:"center"}}>
                        <li style={{marginRight:"20px"}}><a href='https://facebook.com'><FontAwesomeIcon icon={faFacebook} size="2x" color="white" /></a></li>
                        <li style={{marginRight:"20px"}}><a href='https://twitter.com'><FontAwesomeIcon icon={faTwitter} size="2x" color="white" /></a></li>
                        <li ><a href='https://instagram.com'><FontAwesomeIcon icon={faInstagram} size="2x" color="white"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer