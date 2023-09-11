// function App() {
//   return (
//     <p>hello world</p>
//   );
// }

// export default App;
// 继承的方式实现
import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Musicitem from './components/Musicitem'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      child: "music"
    }
  }
  render() {
    return (
      <div className="test">
        hello world
        <Musicitem data={this.state.child}></Musicitem>
      </div>
    )
  }
  componentDidMount() {
    let url = "http://localhost:8000/top250"
    axios.get(url).then(res => {
      this.setState({
        movies: res.data.result
      })
      console.log(this.state.movies)
    })
  }
}
