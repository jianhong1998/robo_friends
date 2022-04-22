import React from "react";
import { robots } from "./robots";
import CardList from "./card_list";
import SearchBox from "./search_box";

const App = () => {
    return (
        <React.Fragment>
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox/>
                <CardList robots = {robots} />
            </div>
        </React.Fragment>
    );
} 

export default App;