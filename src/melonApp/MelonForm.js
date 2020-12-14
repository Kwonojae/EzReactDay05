import React, { Component } from 'react';
import './MelonForm.css'

class MelonForm extends Component {
    state = {
        text : ''
    }
    handleChange = (e) => {
        const {value} = e.target
        this.props.onText(this.state.text)
        this.setState({
            text : value
        })
    }
    render() {
        const {text} = this.state
        return (
            <div className="MelonForm">
                <input type="text" placeholder="음악명을 검색하세요" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default MelonForm;