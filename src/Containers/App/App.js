import React, {Component} from 'react'
import './App.css';


class App extends Component {

    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('note'));
        console.log(this.documentData)
    }

    render = () => {

        return (
            <div className="App">
                <h1>My notes</h1>
            </div>
        )
    }

}


export default App;
