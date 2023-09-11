import React, { Component } from 'react'
import './Musicitem.css'

export default class Musicitem extends Component {

    render() {
        return (
            <div className="content">{this.props.data.map(item => {
                return <div key={item.id}><img src={item.coverImgUrl} alt=""></img><p>{item.name}</p></div>
            })}

            </div>
        )
    }
}
