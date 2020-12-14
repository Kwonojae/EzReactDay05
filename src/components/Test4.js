import React, { Component } from 'react';
import $ from 'jquery'

class Test4 extends Component {
    state = {
        data : [
            {no:1, name:'권오재'},
            {no:2, name:'KwonOjea'},
            {no:3, name:'아이폰'},
            {no:4, name:'iPone'},
            {no:5, name:'애플'},
            {no:6, name:'Apple'},
            {no:7, name:'coFFee'},
            {no:8, name:'커피'},
            {no:9, name:'스타벅스'},
            {no:10, name:'StarBucks'},
        ],
        text:''
    }

    // componentDidMount() { //리액트에서 제이쿼리 사용법
    //     let msg = ''
    //     let $li = $('ul li')
    //     $('#text').keyup(function () {
    //         $li.hide()
    //         msg = $(this).val()
    //         let con = $li.find('span:contains('+msg+')')
    //         $(con).parent().show()
    //     })
    // }
    handleChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }

    render() {
        const {data,text} = this.state
        // const filterData = data.filter(item => item.name.indexOf(text) !== -1)
        const filterData = data.filter(item => {
            const re = new RegExp(text, 'ig')//텍스트를 대소문자 구분안하겠땅
            return item.name.match(re)
        })
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <hr/>
                <h2>검색결과</h2>
                {
                    filterData.map(item=> <p key={item.no}>
                        {item.no} / {item.name}
                    </p>)
                }
                <hr/>
            <ul>    
                {
                    data.map(item => <li key={item.no}>
                        {item.no} / <span>{item.name}</span>
                    </li>)
                }
            </ul>    
            </div>
        );
    }
}

export default Test4;