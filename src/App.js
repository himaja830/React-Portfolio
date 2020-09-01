import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
     title: 'Himaja Sriramaneni',
     headerLinks: [
       { title: 'Home', path: '/'},
       { title: 'About', path: '/about'},
       { title: 'Contact', path: '/contact'}
     ],
      home: {
       title: 'Himaja Sriramaneni',
       subTitle: 'Full Stack Web-Developer',
       text: 'Checkout my work below ("Toggle on respective cards to look into respective Projexts")'
     },
     about: {
      title: 'A little about me!',
    },
    contact: {
      title: 'Let\'s Talk.....',
    }
  }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid= {true} style={{overflowX:"hidden"}}>
        <Navbar className="border-bottom s-navbar" expand="lg">
          <Navbar.Brand className="s-h3">Himaja Sriramaneni</Navbar.Brand>
          <Navbar.Toggle  className="border-0"aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Badge variant="light" style={{paddingTop:"15px"}}><a href="https://docs.google.com/document/d/1k3QMn_XeigwSdIjmDWHl84-_EBCMQ16u96NxXKUCMII/edit?usp=sharing">Resume </a> </Badge>
             
            </Nav>
 
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
        <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />}/>
        <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>

        
        <Footer sticky="bottom"/>
        </Container>
      </Router>
    );
  }
}

export default App;