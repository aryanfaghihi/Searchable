import React, { Component } from 'react';
import logo from './logo.svg';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Search text was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Searchbox">
        <form onSubmit={this.handleSubmit}>
            <label>
                Text: <input type="text" className="Searchbox-Component" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Content;
