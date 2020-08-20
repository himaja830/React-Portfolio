import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props){
    const style = useSpring({opacity:1, from: {opacity: 0}});
   return(
       <animated.div className="s-card-info" style={style}>
           <p className="s-card-title">{props.title}</p>
           <p className="s-card-subTitle">{props.subTitle}</p>
           <a href={props.link1} target="_blank" rel="noopener noreferrer">View</a>
           <div>
           <a href={props.link2} target="_blank" rel="noopener noreferrer">Github</a>
           </div>

       </animated.div>
   )
}
export default CardInfo;