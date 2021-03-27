import React,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { robots } from '../robots';
import Schroll from '../Components/Schroll';
import './App.css';

class App extends Component{
    constructor()
    {
        super();
        this.state = {
            robots : robots,
            searchField:''
        }
    }
    onSearchChange = (event)=>{
        
        this.setState({searchField : event.target.value});
    }
    render()
    {
        const filterArray = this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Schroll>
                <CardList robots={filterArray}/>
            </Schroll>
            </div>
        );
    }
}

export default App;