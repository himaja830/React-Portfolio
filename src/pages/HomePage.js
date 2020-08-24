import React from 'react';
import Container from 'react-bootstrap/Container';



import Jumbo from '../components/Jumbo';
import Carousel from '../components/Carousel';
import image from '../assets/images/mern_stack.png';
import image1 from '../assets/images/heroku_img.png';
import image2 from '../assets/images/git_img.jpg';
import image3 from '../assets/images/github.png';
import image4 from '../assets/images/express_img.png';
import image5 from '../assets/images/mongodb_image.jpg';
import image6 from '../assets/images/mongoose_img.png';
import image7 from '../assets/images/sequelize-3-logo.png';
import image8 from '../assets/images/nodejs.jpg';
import image9 from '../assets/images/react.png';
import image10 from '../assets/images/mysql.png';
import image11 from '../assets/images/web_dev.png';



function HomePage(props){

    return(
        <div style={{backgroundColor:'#e6e6e6'}}>
         <Jumbo  title={props.title} subTitle={props.subTitle} text={props.text}/>
         
         < Carousel />
         <Container className="mr-auto  ml-auto" style={{backgroundColor:'white'}}>
             <img src={image} alt="#" className="img-mern"/>
             <img src={image1} alt="#" className="img-mern"/>
             <img src={image2} alt="#" className="img-mern"/>
             <img src={image3} alt="#" className="img-mern"/>
             <img src={image4} alt="#" className="img-mern"/>
             <img src={image5} alt="#" className="img-mern"/>
             <img src={image6} alt="#" className="img-mern"/>
             <img src={image7} alt="#" className="img-mern"/>
             <img src={image8} alt="#" className="img-mern"/>
             <img src={image9} alt="#" className="img-mern"/>
             <img src={image10} alt="#" className="img-mern"/>
             <img src={image11} alt="#" className="img-mern"/>
            </Container>
         </div>
    );

}

export default HomePage;