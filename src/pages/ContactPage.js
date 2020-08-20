import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';


import Jumbo from '../components/Jumbo';
import Content from '../components/Content';
import Axios from 'axios';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });
        Axios.post('http://localhost:3001/api/email', this.state)
             .then(res => {
                if(res.data.success){
                    this.setState({
                        disabled: false,
                        emailSent: true
                });
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
            })
             .catch(err => {
                 console.log(err);
                 this.setState({
                     disabled: false,
                     emailSent:false
                 })
             });
    }
    render() {
        return ( <div style={{backgroundColor:'#e6e6e6'}}>
            <Jumbo title = {this.props.title}/>
            <Container className="ml-auto mr-auto">
            <i><p style={{textDecoration:'underline'}}> * Can contact me through these profiles or can send me your message through form("Click on these Icons for respective details")</p></i>
           <a href="https://www.linkedin.com/in/himaja-sriramaneni-994937164/"><FontAwesomeIcon icon={faLinkedin} className="fas fa-camera fa-3x" style={{color:'#696969'}} /></a> 
           <a href="https://github.com/himaja830" ><FontAwesomeIcon icon={faGithub} className="fas fa-camera fa-3x" style={{color:'#696969'}} /></a>
           </Container>
        <Content>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
               <Form.Label htmlFor = 'full-name'>
                     Full Name:
               </Form.Label> 
               <Form.Control id = 'full-name' name = 'name' type = 'text' value = {this.state.name} onChange = {this.handleChange}/> 
            </Form.Group> 
            <Form.Group >
              <Form.Label htmlFor = 'email' >
                      Email:
              </Form.Label> 
              <Form.Control id = 'email' name = 'email' type = 'email' value = {this.state.email} onChange= {this.handleChange}/>
            </Form.Group> 
            <Form.Group>
            <Form.Label htmlFor = 'message'>
            Message:
            </Form.Label> 
            <Form.Control id = 'message' name = 'message' as = 'textarea' rows = "5" value = {this.state.message} onChange = {this.handleChange}/> 
            </Form.Group>
            <Button className="d-inline-block" variant="secondary" type="submit" disabled={this.state.disabled}>
                Send
            </Button>
            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
           </Form> 
        </Content>
        </div>
        );
    }

}

export default ContactPage;