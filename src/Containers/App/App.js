import React, {Component} from 'react'
import './App.css';
import Notes from "../../Constants/notes";

class App extends Component {

    constructor(props) {
        super(props)
        this.json = {}
    }



    render = () => {
        console.log(Notes[1])
        return (
            <div className="App">
                <h1>My notes</h1>
                <p>{Notes[0].title}</p>
            </div>
        )
    }

}


export default App;
