import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import star from '../src/assets/star.png'
import no_star from '../src/assets/no-star.png'
import ban_star from '../src/assets/ban-star.png'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.transfromStar = this.transfromStar.bind(this)
    this.state = {
      movies: []
    }
  }
  render() {
    const listItem = this.state.movies.map(item => {
      item.star = this.transfromStar(item.raiting)
      const starItem = item.star.map((value, index) => {
        if (value >= 2) {
          return (
            <img src={star} alt="" className="star" key={index} />
          )
        } else if (value >= 1.5) {
          return (
            <img src={ban_star} alt="" className="star" key={index} />
          )
        } else {
          return (
            <img src={no_star} alt="" className="star" key={index} />
          )
        }
      })
      return (

        <div className="item" key={item.title}>
          <img src={item.pic} alt="" className="pic" />
          <p className="name">{this.handleTitle(item.title)}</p>
          <div className="xingrat">
            <span>{starItem}</span>
            <p className="fen">{item.raiting}</p>
          </div>
        </div>
      )
    })
    return (
      <div className="app">
        {listItem}
      </div>

    )
  }
  componentDidMount() {
    axios.get("http://localhost:8000/top250").then(res => {
      this.setState({
        movies: res.data.result
      })
    })
  }
  handleTitle(value) {
    if (value.length > 6) {
      return value.slice(0, 6) + "..."
    }
    return value;
  }
  transfromStar(num) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (num > 2) {
        arr.push(2)
      } else if (num > 1) {
        arr.push(Number(num.toFixed(1)))
      } else {
        arr.push(0)
      }
      num = num - 2;
    }
    return arr;
  }
}