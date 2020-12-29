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
                <div className="form-group">
                    <label>
                        Title : </label>
                    <input className="form-control"
                        type='text'
                        name='title'
                    />
                </div>
                <div className="form-group">
                    <label>Subject : </label>
                    <input className="form-control"
                        type='text'
                        name='title'
                    />
                </div>
                <div className="form-group">
                    <label>Content : </label>
                    <textarea className="form-control" value={this.state.content}/>
                </div>

                <button type="button" className="submit btn-primary btn">SAVE</button>


            </form>
        );
    }
}

export default Form