import React from 'react';
import axios from 'axios';
import Playlist from './Playlist';
import Controller from './Controller';
import Search from './Search';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://vip.aersia.net/roster.xml')
      .then((response) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, 'application/xml');
        const newList = [];
        [].slice.call(doc.getElementsByTagName('track')).forEach((track) => {
          newList.push({
            creator: track.childNodes[1].innerHTML,
            title: track.childNodes[3].innerHTML,
            location: track.childNodes[5].innerHTML,
          });
        });
        this.setState({ list: newList });
      });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <Search />
        <Controller />
        <Playlist playlist={list} />
      </div>
    );
  }
}

export default Player;
