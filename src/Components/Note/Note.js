import React, {Component} from 'react'


import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Note.css'

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'No title',
            subject: '',
            content: 'Write your note',
            category: '',
            date: null,
        };
    }

    render = () => {
        const {title, subject, content, category, date} = this.state


        return (
            <div className="Note">
                <h3 className="title">{title}</h3>
                <span className="date">{date}</span>
                <h4 className="subject">{subject}</h4>
                <p className="content">{content}</p>
            </div>
        )

    }
}

export default Note