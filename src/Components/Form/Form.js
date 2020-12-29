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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    mySubmitHandler = () => {
        alert("You are submitting " + this.state.title);
    }


    render() {
        return (
            <form className="form" onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.title} {this.state.content}</h1>
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

//  public function addPost(Post $post)
//     {
//         $arrayMessage=[];
//         foreach ($this->posts as $data){
//             array_push($arrayMessage,$data->export());
//     }
//         array_push($arrayMessage, $post->export());
//         file_put_contents('messages.json', json_encode($arrayMessage, JSON_PRETTY_PRINT));
//     }