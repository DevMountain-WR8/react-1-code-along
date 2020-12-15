//Old way of importing
// import React, {Component} from 'react';

//New way of importing
//Importing brings in the Component class for the Component to extend(required)
import {Component} from 'react';
import FuncComponent from './FuncComponent';

//Create your component as a JS class(required)
class ClassComponent extends Component {
    //constructor contains the state object
    constructor(){
        //invoke super (required)
        super();
        this.state = {
            username: 'Matt',
            age: 28,
            friends: [],
            picture: '',
            name: ''
        }
        //binding methods makes them work when invoked (arrow functions can work as well)
        this.addFriend = this.addFriend.bind(this);
    }

    //prototype for changing inputs takes event to setState to event.target.value
    handlePictureChange(event){
        //setState changes state values, and is required to change state values
        this.setState({
            picture: event.target.value
        })
    }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }

    addFriend(){
        const {picture, name} = this.state;

        const newFriend = {picture: picture, name: name};
        const copyFriendArr = this.state.friends.slice();
        copyFriendArr.push(newFriend);

        this.setState({
            friends: copyFriendArr
        })
    }

    //Render prototype returns the display of the component(required)
    render(){
        //console.logs to see state changes should be between render and return
        // console.log('Picture:', this.state.picture)
        // console.log('Name:', this.state.name)
        // console.log('Friends:', this.state.friends)
        const mappedFriends = this.state.friends.map((element, i) => (
            <section key={i}>
                <img src={element.picture} alt={element.name}/>
                <p>{element.name}</p>
            </section>
        ))

        return (
            <section>
                <p>{this.state.username} is {this.state.age}</p>
                <label>Picture:</label>
                <input value={this.state.picture} onChange={event => this.handlePictureChange(event)}/>
                <label>Name:</label>
                <input value={this.state.name} onChange={e => this.handleNameChange(e)}/>
                <button onClick={this.addFriend}>Add Friend</button>
                {mappedFriends}
                <FuncComponent />
            </section>
        )
    }
}

//Exporting makes the component available to your application(required)
export default ClassComponent;