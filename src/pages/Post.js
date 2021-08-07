import React, { useState, useEffect, useRef } from 'react';
export default function Show(props) {
	const [bookmark, setBookmark] = useState({});
	const titleInput = useRef(null); // doc.qs('input#title')
	const urlInput = useRef(null); // doc.qs('input#body')

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/bookmarks/`);
				const data = await response.json();
				setBookmark(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/bookmarks/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedBookmark = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};
	return (
		<div className="ShowPage">
			{Object.keys(bookmark).length ? (
				<>
					<h3>{bookmark.title}</h3>
					<p>{bookmark.url}</p>
					<button onClick={handleDelete}>DELETE ME</button>
				</>
			) : (
				<h1> Loading...</h1>
			)}
		</div>
	);
}
