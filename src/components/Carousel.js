/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';
import CookingApp from '../assets/images/CookingApp.png';
import  DayPlanner from '../assets/images/DayPlanner.png';
import Notetaker from '../assets/images/Notetaker.png';
import RockYourWorld from '../assets/images/RockYourWorld.png';
import WeatherDashboard from '../assets/images/WeatherDashboard.png';
import EmployeeDirectory from '../assets/images/EmployeeDirectory.png';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            items: [
               {
                   id: 0,
                   title: '"To Cook or Not to Cook"',
                   subTitle: "This App helps to find a particular recipe and near by restaurents having a particular recipe",
                   imgSrc: CookingApp,
                   link1: 'https://stephsko.github.io/Project-1/',
                   link2: 'https://github.com/stephsko/Project-1',
                   selected: false

               },
               {
                id: 1,
                title: '"Day Planner"',
                subTitle: "This App helps to Plan hour to hour activities in a Day",
                imgSrc: DayPlanner,
                link1: 'https://himaja830.github.io/Day-Planner/index.html',
                link2: 'https://github.com/himaja830/Day-Planner',
                selected: false

            },
            {
                id: 2,
                title: '"Note taker"',
                subTitle: "Helps to take,save and delete notes",
                imgSrc: Notetaker,
                link1: 'https://guarded-cliffs-85665.herokuapp.com/',
                link2: 'https://github.com/himaja830/Note-Taker',
                selected: false

            },
            {
                id: 3,
                title: '"Rock Your World"',
                subTitle: "This is a trade app with Rock Collection",
                imgSrc: RockYourWorld,
                link1: 'https://rock-trader-2020.herokuapp.com/',
                link2: 'https://github.com/cnmiller127/Project-2',
                selected: false

            },
            {
                id: 4,
                title: '"Weather Dashboard"',
                subTitle: "This app helps us to Know Weather details of particular location for next 5 days",
                imgSrc: WeatherDashboard,
                link1: 'https://himaja830.github.io/Weather-Dashboard/',
                link2: 'https://github.com/himaja830/Weather-Dashboard',
                selected: false

            },
            {
                id: 5,
                title: '"Employee Directory"',
                subTitle: "This a React user Directory",
                imgSrc: EmployeeDirectory,
                link1: 'https://sheltered-river-65453.herokuapp.com/',
                link2: 'https://github.com/himaja830/Employee-Directory',
                selected: false

            }
            ]
        }
    }
    handleCardClick = (id,card) => {
         let items = [...this.state.items];
         items[id].selected = items[id].selected ? false : true;
         items.forEach(item => {
             if(item.id !== id){
                 item.selected = false;
             }
         });

         this.setState({
             items
         });
    }

    makeItems = (items) => {
       return items.map(item => {
           return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id}/>
       })
    }

    render(){

        return(
           <Container fluid={true}>
               <Row className="justify-content-around">
                   {this.makeItems(this.state.items)}

               </Row>

           </Container>
        );
    }
}
export default Carousel;