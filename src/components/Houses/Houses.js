import HousesList from "./HousesList";

import classes from './Houses.module.css';
import HousesSummary from "./HousesSummary";
import AvailableHouses from "./AvailableHouses";

const Houses = (props) => {
    return(
        <div className={classes.houses}> 
            <HousesSummary />
            <AvailableHouses />
             {/* <div>
                <HousesList/>
            </div> */}
        </div>
    )
}

export default Houses;