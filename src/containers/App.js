import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

const App = () => {
    const [ robots, setRobots ] = useState([]);
    const [ searchField, setSearchField ] = useState('');
    const [ count, setCount ] = useState(0);
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})
    }, [count])

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({robots: users})
    //     )
    // }

    const onSearchChange = event => {
        setSearchField(event.target.value);
    }

    // render() {
        // const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name
            .toLowerCase()
            .includes(searchField.toLowerCase())
    })

    return !robots.length ?
        <h1 className="f2 neonText">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f2 neonText">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
// }

export default App;