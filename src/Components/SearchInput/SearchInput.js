import React, {useState} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchInput.css'
import Fuse from 'fuse.js';
import Notes from "../../Constants/notes";
import Note from "../../Components/Note";
import SearchByCategory from "../SearchByCategory";

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

    function onSearch({currentTarget}) {
        updateQuery(currentTarget.value);
    }

    return (
        <div className="SearchInput">
            <div className='searchBtn'>
                <input className="query" onChange={onSearch} value={query}/>
                <button type="button" className="submit">SEARCH</button>
            </div>
            <div className="notesSelected">
                <SearchByCategory/>
            </div>

            <div className="notesSearched">
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
            </div>
        </div>
    )


}

export default SearchInput
