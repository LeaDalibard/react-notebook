import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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

                <p>Content:</p>
                <textarea value={this.state.content}/>

                <p>
                    <button type="button" className="submit btn-primary btn">SAVE</button>
                </p>

            </form>
        );
    }
}

export default Form