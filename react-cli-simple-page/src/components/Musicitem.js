import React, { Component } from 'react'
import './Musicitem.css'
export default class Musicitem extends Component {
    // constructor(props) { //不写默认存在，用于接收父组件传递的值
    //     super(props)
    // }
    render() {
        return (
            <div className="item">
                musicitem
                {this.props.data}
            </div>
        )
    }
}
