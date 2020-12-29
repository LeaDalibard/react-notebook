import React, {Component} from 'react'


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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:  value
        });
        let date=new Date();
        this.setState({date: date});
    }

    mySubmitHandler = (e) => {
        e.preventDefault()
        const oldnotes = JSON.parse(localStorage.getItem('notes')) || [];
        console.log(oldnotes)
        oldnotes.push(this.state)
        console.log(oldnotes)
        localStorage.setItem('notes',JSON.stringify(oldnotes));
        //localStorage.clear();
    }

    render() {
        return (
            <form className="form" onSubmit={this.mySubmitHandler}>
                <div className="form-group">
                    <label>
                        Title : </label>
                    <input className="form-control"
                           type='text'
                           name='title'
                           value={this.state.title} onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Subject : </label>
                    <input className="form-control"
                           type='text'
                           name='subject'
                           value={this.state.subject} onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Content : </label>
                    <textarea className="form-control" name='content' value={this.state.content}
                              onChange={this.handleInputChange}/>
                </div>

                <button type="submit" className="submit btn-primary btn">SAVE</button>


            </form>
        );
    }
}

export default Form

