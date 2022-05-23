import React,{useState,useRef,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faLinkedin,faTwitch} from '@fortawesome/free-brands-svg-icons'
import {faHouse,faBars} from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
function Navbar() {
    const refListContainer = useRef(null);  
    const refUl = useRef(null);
    const [show,setShow] = useState(false);
    useEffect(()=>{
        let altezzaUl = refUl.current.getBoundingClientRect().height;
        console.log(show);
        if(show){
           refListContainer.current.style.height = `${altezzaUl}px`;
           console.log(altezzaUl);
        }else{
            refListContainer.current.style.height = '0px';
        }
    },[show])
  return (
    <nav>
        <div className="logo-icona">
            <div className="logo">
                <a href="/"> <FontAwesomeIcon icon={faHouse} />NavBar</a>
            </div>
            <div className="icona-mobile" onClick={()=>{setShow(!show)}}>
                <FontAwesomeIcon className='icona' icon={faBars} />
            </div>
        </div>
        
        <div className="list" ref={refListContainer}>
            <ul ref={refUl}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Chi Siamo</a></li>
                <li><a href="/">Contattaci</a></li>
                <li><a href="/">Informazioni</a></li>
            </ul>
        </div>

        <div className="social">
            <ul>
                <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="/"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="/"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="/"> <FontAwesomeIcon icon={faTwitch} /></a></li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar