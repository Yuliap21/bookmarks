import React, { useState } from 'react';

export default function Home(props) {
	const addBookmark = async e => {
		try {
			const response = await fetch('/api/bookmarks/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value,
					url: urlInput.current.value
				})
			});
			const data = await response.json();
			setBookmark(data);
		} catch (error) {
			console.error(error);
		}
	};
	// 	return (
	// 	<div className="HomePage">
	// 	<ul>{posts.map(post => {
	// 		return(
	// 			 <li key={post._id}>
	// 			 <Link to={`/${post._id}`}>
	// 			 <h3>{post.title}</h3>
	// 			 </Link>
	// 			 <p>{post.body}</p>
	// 			 </li>
	// 		 );
	// 	})}
	// 	</ul>
	// 	</div>;
}
