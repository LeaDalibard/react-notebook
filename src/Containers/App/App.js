import React, {Component} from 'react'
import './App.css';


class App extends Component {
    notes
    constructor(props) {
        super(props)
        this.state = {notes: []}
    }


    componentDidMount() {
        this.notes = JSON.parse(localStorage.getItem('notes'));

        if (localStorage.getItem('notes')) {
            this.setState({
                notes: this.notes,
            })
        }
        console.log(this.notes)
        console.log(this.state.notes)

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
