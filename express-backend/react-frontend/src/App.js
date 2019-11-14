import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.state ={
      list: true,
      car: false,
      players: [],
      player: {}
    };
  }

  componentDidMount() {
    fetch("/players/list")
    .then(response => response.json())
    .then(responseJson => {
      this.setState({ players:responseJson.data })
    })
  }

 showCar = id => {
   fetch(`/players/${id}`)
   .then(response => response.json())
   .then( responseJson => {this.setState({ player:responseJson.data})
  })
  this.setState({
    list:false,
    card:true
  });
 };

}