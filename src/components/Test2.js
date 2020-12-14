import React, { Component } from 'react';

class Test2 extends Component {
    textInput = React.createRef()

    state={
        text:'',
        pwd:''
    }
    handleChange = (e) => {
        const {name,value}=e.target
        this.setState({
            [name] : value
        })
    }
    handleClick = () => {
        this.setState({
            text:'',
            pwd:''
        })
        this.textInput.current.focus();
    }
    render() {
        const {text,pwd}=this.state
        return (
            <div>
                <input type='text' ref={this.textInput} name="text" value={text} onChange={this.handleChange}/>
                <input type='password' name="pwd" value={pwd} onChange={this.handleChange}/>
                {
                    pwd.length > 6 ? <button onClick={this.handleClick}>확인</button> :
                    <button disabled>확인</button>
                }

                {
                    <button disabled={pwd.length < 7 && true } onClick={this.handleClick}>확인</button>
                }
                <h2>{pwd.length}</h2>
            </div>
        );
    }
}

export default Test2;