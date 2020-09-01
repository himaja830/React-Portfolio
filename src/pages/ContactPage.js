import React from 'react';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';


import Jumbo from '../components/Jumbo';


function ContactPage(props){
    
        return ( 
        <div style={{backgroundColor:'#e6e6e6'}}>
            <Jumbo title = {props.title}/>
            <Container className="ml-auto mr-auto">
            <i><p style={{textDecoration:'underline'}}> * Can contact me through these profiles or can send me your message through form("Click on these Icons for respective details")</p></i>
           <a href="https://www.linkedin.com/in/himaja-sriramaneni-994937164/"><FontAwesomeIcon icon={faLinkedin} className="fas fa-camera fa-3x" style={{color:'#696969'}} /></a> 
           <a href="https://github.com/himaja830" ><FontAwesomeIcon icon={faGithub} className="fas fa-camera fa-3x" style={{color:'#696969'}} /></a>
           </Container>
        </div>
        );
    }



export default ContactPage;