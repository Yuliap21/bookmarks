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
	return <div className="HomePage">This is the {props.page} page</div>;
}
