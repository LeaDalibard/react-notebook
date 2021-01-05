import React, {Component} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchInput.css'
import Fuse from 'fuse.js';
import Notes from "../../Constants/notes";

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
            ]
        });

        const results = fuse.search('lorem');

        console.log(results);
        //console.log(Notes);

        return (
            <div className="SearchInput">
                <input className="query" onChange={this._handleChange} value={value}/>
                <button type="button" className="submit">SEARCH</button>
            </div>
        )
    }

}

export default SearchInput
