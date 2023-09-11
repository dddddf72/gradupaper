import React, { Component } from 'react'
import MuMusicitem from './components/Musicitem'
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
        <MuMusicitem data={this.state.playlists}></MuMusicitem>
      </div>
    )
  }
  componentDidMount() {
    axios.get("http://localhost:4000/top/playlist?cat=华语").then(res => {
      this.setState({
        playlists: res.data.playlists
      })
    })
  }
}
