import React, {Component} from 'react'
import './App.css';
import Note from "../../Components/Note";
import Notes from "../../Constants/notes";

class App extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <div className="App">
                <h1>My notes</h1>
                {Notes.map(({title,subject,content,date})=>(
                    <Note
                    title={title}
                    subject={subject}
                    content={content}
                    date={date}
                    />))}

            </div>
        )
    }

}


export default App;
