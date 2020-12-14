import React, { Component } from 'react';

class Test3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        console.log('1.constructor');
    }
    increment = () => {
        const {count} = this.state
        this.setState({
            count : count + 1
        })
    }
    decrement = () => {
        const {count} = this.state
        this.setState({
            count : count - 1
        })
    }
    componentDidMount() {
        console.log('3.componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('4.componentDidUpdate')
        console.log(prevProps,prevState)
    }

    render() {
        console.log('2.render');
        const {count} = this.state
        return (
            <div>
                <h2>숫자증가감소:{count}</h2>
                <button onClick={this.increment}>증가</button>
                <button onClick={this.decrement}>감소</button>
            </div>
        );
    }
}

export default Test3;