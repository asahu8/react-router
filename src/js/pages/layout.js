import React from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends React.Component {
  navigate() {
    console.log(this.props);
    // Back button still helps!
    // this.props.history.pushState(null, '/');
    // no history no back button will work for below one.
    this.props.history.replaceState(null, '/'); 
  }
  render() {
    return (
      <div>
        {this.props.children}
        <Link to="angular"> angular </Link>
        <Link to="reactjs"> <button class="btn btn-success"> ReactJS </button> </Link>
        <button onClick={this.navigate.bind(this)}> Ror </button>
        <h1> Bingo Boss </h1>
      </div>
    );
  }
}