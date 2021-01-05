import React, {Component} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchInput.css'
import Fuse from 'fuse.js';
import Notes from "../../Constants/notes";
import Note from "../../Components/Note";

class SearchInput extends Component {

    state = {value: ''}
    _handleChange = ({target: {value}}) => this.setState({value})

    render = () => {
        const {value} = this.state
        const fuse = new Fuse(Notes, {
            keys: [
                'category',
                'title',
                'subject',
                'content',
                'date'
            ],
            includeScore: true
        });

        //lowerScore => closer to an exact match

        const results = fuse.search('lorem');
        const notesResults = results.map(Note => Note.item)

        //console.log(results);
        //console.log(Notes);
        console.log(notesResults)

        return (
            <div className="SearchInput">
                <input className="query" onChange={this._handleChange} value={value}/>
                <button type="button" className="submit">SEARCH</button>

                <ul className="notesSearch">
                    {notesResults.map(note => {
                        const {category, title, subject, content, date, index} = note;

                        return (
                            <Note
                                key={index}
                                title={title}
                                subject={subject}
                                category={category}
                                content={content}
                                date={date}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default SearchInput
