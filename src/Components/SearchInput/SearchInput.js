import React, {Component} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SearchInput.css'

class SearchInput extends Component {

    state = {value: ''}
    _handleChange = ({target: {value}}) => this.setState({value})

    render = () => {
        const {value} = this.state

        return(
            <div className="SearchInput">
                <input className="query" onChange={this._handleChange} value={value}/>
                <button type="button" className="submit" >SEARCH</button>
            </div>
        )
    }

}
export default SearchInput
