import React, {useState} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchInput.css'
import Fuse from 'fuse.js';
import Notes from "../../Constants/notes";
import Note from "../../Components/Note";

function SearchInput() {
    const [query, updateQuery] = useState('');

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

    const results = fuse.search(query);
    const notesResults = query ? results.map(Note => Note.item) : Notes;

    function onSearch({ currentTarget }) {
        updateQuery(currentTarget.value);
    }

    //console.log(results);
    //console.log(Notes);
    console.log(notesResults)

    return (
        <div className="SearchInput">
            <input className="query" onChange={onSearch} value={query}/>
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

export default SearchInput
