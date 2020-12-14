import React, { Component } from 'react';
import TodoItem from '../todoApp/TodoItem';
import MelonForm from './MelonForm';
import MelonItem from './MelonItem';
import './MelonList.css'

class MelonList extends Component {
    render() {
        const {datafilter}= this.props
        return (
            <div className="MelonList">
                <table>
                    <caption>멜론</caption>
                    <colgroup>
                        <col className="w1"/>
                        <col className="w2"/>
                        <col className="w3"/>
                        <col className="w4"/>
                        <col className="w5"/>
                        <col className="w6"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>곡정보</th>
                            <th>앨범</th>
                            <th>좋아요</th>
                            <th>무비</th>
                            <th>상승/하락</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>{datafilter[0].rank}</td>
                            <td>
                                <img src={datafilter[0].poster} alt="" width="50"/>
                                {datafilter[0].title}
                            </td>
                            <td>{datafilter[0].singer}</td>
                            <td>{datafilter[0].like}</td>
                            <td>5</td>
                            <td>{datafilter[0].state}</td>
                        </tr> */}
                        {
                            datafilter.map(item => <MelonItem key={item.rank}
                                                            item={item}
                            />)
                        }
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default MelonList;