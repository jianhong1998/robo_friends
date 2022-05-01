import React , {Component} from "react";
import { robots } from "./robots";
import CardList from "./card_list";
import SearchBox from "./search_box";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
        console.log("Constructor get run");
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    
    componentDidMount() {
        this.setState({ robots : robots });
        console.log("Component Did Mount");
    }

    render() {
        const filterRobots = this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(
                    this.state.searchfield.toLowerCase()
                );
            }
        );
        
        console.log("Render get run");

        return (
            <React.Fragment>
                <div className="tc">
                    <h1 className="f1" id="tittle-robo-friends">Robo Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <CardList robots = {filterRobots} />
                </div>
            </React.Fragment>
        );
    }
} 

export default App;