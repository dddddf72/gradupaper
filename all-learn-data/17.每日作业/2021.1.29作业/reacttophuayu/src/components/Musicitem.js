import React, { Component } from 'react'
import './Musicitem.css'
export default class Musicitem extends Component {
    render() {

        return (
            <div className="out">{this.props.data.map(item => {
                return <div key={item.id}><img src={item.coverImgUrl} alt="" /><p>{item.name}</p></div>
            })}</div>
        )
    }
}
