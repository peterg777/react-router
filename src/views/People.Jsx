import React, { Component } from 'react';
import PeopleCard from '../components/PeopleCard';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(result => result.json())
      .then(people => {
        this.setState({ people });
      });
  }

  render() {
    return (
      <>
        {this.state.people.map(person => <PeopleCard key={person.id} person={person} />)}
      </>
    );
  }
}







export default People;