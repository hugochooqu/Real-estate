import Card from "../../UI/card";

import classes from './HouseItem.module.css';

const HouseItem = props => {
    return (
        <Card className={classes.houseItem}>
            <img src={props.image} alt="houses" />
            <h1>{props.price}</h1>
            <p>{props.description}</p>
            <h3>{props.location}</h3>
        </Card>
            
        
    )
};

export default HouseItem;