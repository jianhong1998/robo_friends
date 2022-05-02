import React , {Component} from "react";
// import { robots } from "./robots";
import CardList from "./card_list";
import SearchBox from "./search_box";
import Scroll from "./Scroll";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots : users }));
    }

    render() {
        const {robots , searchfield} = this.state;

        const filterRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(
                    searchfield.toLowerCase()
                );
            }
        );
        
        return (!robots.length) ? 
            (
                <React.Fragment>
                    <div className="tc">
                    <h1 className="f1" id="tittle-robo-friends">Robo Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <h1 className="f1" id="loading">
                        Loading...
                    </h1>
                </div>
                </React.Fragment>
            ) :
            (
                <React.Fragment>
                    <div className="tc">
                        <h1 className="f1" id="tittle-robo-friends">Robo Friends</h1>
                        <SearchBox searchChange = {this.onSearchChange} />
                        <Scroll>
                            <CardList robots = {filterRobots} />
                        </Scroll>
                    </div>
                </React.Fragment>
            );
    }
} 

export default App;