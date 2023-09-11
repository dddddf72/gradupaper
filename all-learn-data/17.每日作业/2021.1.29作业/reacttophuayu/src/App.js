import React, { Component } from 'react'
import Musicitem from './components/Musicitem'
import axios from 'axios'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    }
  }
  render() {
    return (
      <div>
        <Musicitem data={this.state.playlists}></Musicitem>
      </div>
    )
  }
  componentDidMount() {
    let url = "http://localhost:4000/top/playlist?cat=华语"
    axios.get(url).then(res => {

      this.setState({
        playlists: res.data.playlists
      })
      console.log(this.state.playlists)
    })
  }
}
