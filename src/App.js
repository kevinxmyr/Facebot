import React, { Component } from 'react';
// import { robots } from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css';
import Scroll from './Scroll'


//?-- Dito muna dineclare ni andrei saka nilagay sa this.state
// const state = {
//     robots: robots,
//     serachfield: ''
// }

class App extends Component {
    constructor() {
        super();
            //!-- this.state - can change and effect the app lives  in parent component
            this.state = {
                robotsState: [],
                searchfield: ''
            }
            
    }
    //?--FUNCTION USER DEFINED NAME - dapat dito naka arrow function pag gagawa ng sariling func sa loob ng class para matawag si parent class
    //?-- walang const or let sa user defined function. ewan bakit haha hindi rin pwede yung traditional function.

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users => this.setState({robotsState: users}))
        } 

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots);
    }

        
    // state = {  } 
    render() {
        //destructured sa this.state.searchfield at this.staterobotState
        const { robotsState, searchfield } = this.state;
        const filteredRobots = robotsState.filter(iterateRobot => {
            return iterateRobot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robotsState.length === 0) {
            return <h1 className='tc'> Loading... </h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Facebot</h1>
                    <SearchBox searchChange = { this.onSearchChange }/>
                    <Scroll> 
                        <CardList robots1 = { filteredRobots }/>
                    </Scroll>
                </div>
            );

        }
    }
}
 
export default App;
 

//!-- class component syntax
// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() { 
//         return (  );
//     }
// }
 
// export default App;

//*--FUNCTIONAL SYNTAX Unang code
// const App = () => {
//     return ( 
//         <div className='tc'>
//             <h1>FaceBots</h1>
//             <SearchBox />
//             <CardList robots1 = {robots}/>
//         </div>
//      );
// }
// export default App;

