import React from 'react';

import Films from '../components/FilmCard';

class Films extends Component {
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
		<Fragment>
		  {this.state.films.map(films => <Films key={films.id} value={films} />)}
		</Fragment>
	  );
	}
  }




export default Films;