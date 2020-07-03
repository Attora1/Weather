import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Week from '../Fiveday'
import OneDay from '../Oneday';

function Nav(){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Oneday,js">Today's Weather</Link>
                        </li>
                        <li>
                            <Link to="/Fiveday.js">5 Day Forecast</Link>
                        </li>
                    </ul>
                </nav>
        
                <Switch>
                    <Route exact path="/Oneday.js" component={OneDay}></Route>
                    <Route path="/Fiveday.js" component={Week}></Route>
                    {console.log("test")}
                </Switch>
            </div>
         </Router>

    )


}

export default Nav; 