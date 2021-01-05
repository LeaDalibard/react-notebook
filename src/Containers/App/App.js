import React, {Component} from 'react'
import './App.css';
import Note from "../../Components/Note";

import Notes from "../../Constants/notes";
import Form from "../../Components/Form";
import SearchInput from "../../Components/SearchInput";

class App extends Component {

    constructor(props) {
        super(props)
    }

    _renderloading = () => {
        let loading = []

        for (let index = 9; index; index--) {
            loading.push(<div key={index} className="isLoading"></div>)
        }
        return loading
    }

    render = () => {

        return (
            <div className="App">
                <h1>My notes</h1>
                <SearchInput/>
                <h2> Add a new note</h2>
                <Form/>

            </div>
        )
    }

}


export default App;

// {!Notes ? this._renderloading() : Notes.map(({title, subject,category, content, date}, index) => (
//                         <Note
//                             key={index}
//                             title={title}
//                             subject={subject}
//                             category={category}
//                             content={content}
//                             date={date}
//                         />))}