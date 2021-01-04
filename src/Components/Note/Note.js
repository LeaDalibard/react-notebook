import React, {Component} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Note.css'
import moment from 'moment'


class Note extends Component {
    static defaultProps = {
        title: 'No title',
        subject: '',
        content: 'Write your note',
        category: '',
        date: null,
    }

    state = {isFavorite: false}


    render = () => {

        const {title, subject, content, category, date} = this.props

        return (
            <div className="Note">
                <h3 className="title">{title}</h3>
                <div className="subinfo">
                    <span className="category">{category}</span>
                    <span className="date">{moment(date).format("LLL")}</span>
                </div>
                <h4 className="subject">{subject}</h4>
                <p className="content">{content}</p>
            </div>
        )

    }
}

export default Note