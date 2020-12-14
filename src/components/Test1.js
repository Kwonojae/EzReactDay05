import React, { Component } from 'react';
import './Test1.css'

class Test1 extends Component {
    state = {
        done : false
    }
    handleToggle=()=>{
        const{done} = this.state
        this.setState({
            // done : !this.state.done
            done : !done
        })
    }
    render() {
        const {done} = this.state
        return (
            <div>
                <p className={`${done?'on':''}`} onClick={this.handleToggle}>
                    테스트입니다
                    addClass / removeClass
                </p>
            </div>
        );
    }
}

export default Test1;