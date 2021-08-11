import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Bookmarks = props => {
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				console.log(props);
				const response = await fetch(`/api/bookmarks/`);
				const data = await response.json();
				setBookmarks(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="bookmarks">
			{bookmarks.map(bookmark => {
				const { title, url, _id } = bookmark;
				return (
					<div key={url}>
						<Link to={`/${_id}`}>
							<h2>{title}</h2>
						</Link>
						<a href={`http://${url}`}> {url}</a>
					</div>
				);
			})}
		</div>
	);
};
export default Bookmarks;
