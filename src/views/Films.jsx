import React from 'react';

import FilmCard from '../components/FilmCard';

class Films extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { films: [] };
	}
  
	componentDidMount() {
	  fetch("https://ghibliapi.herokuapp.com/films")
		.then(result => result.json())
		.then(films => {
		  this.setState({ films });
		});
	}
  
	render() {
	  return (
		<>
		  {this.state.films.map(film => <FilmCard key={film.id} film={film} />)}
		</>
	  );
	}
  }




export default Films;