import React from 'react';
import { Link } from 'react-router-dom';

const PeopleCard = ({ People }) => {
	return (
		<article className="col-md-6">
			<div className="card my-2 shadow">
				<div className="card-body text-center">
					<h4 className="card-title">{People.name}</h4>
					<Link className="btn btn-primary btn-sm shadow-sm" to={`/People/${People.id}`}>Details</Link>
				</div>
			</div>
		</article>
	);

export default PeopleCard;