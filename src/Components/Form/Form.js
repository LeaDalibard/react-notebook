import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Form.css'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subject: '',
            content: 'Write your note',
            category: '',
            date: null,
        };
    }

    render() {
        return (
            <form className="form">
                <p>Title:</p>
                <input
                    type='text'
                    name='title'
                />
                <p>Subject:</p>
                <input
                    type='text'
                    name='subject'
                />
                <label>
                    <p>Content:</p>
                    <textarea value={this.state.content}/>
                </label>
                <p><button type="button" className="submit">SAVE</button></p>

            </form>
        );
    }
}

export default Form