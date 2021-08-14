import React, { useState, useEffect, useRef } from 'react';

export default function Bookmark(props) {
	const [bookmark, setBookmark] = useState({});
	const titleInput = useRef(null); // doc.qs('input#title')
	const urlInput = useRef(null); // doc.qs('input#body')

	useEffect(() => {
		(async () => {
			try {
				console.log('THese are my props', props);
				const response = await fetch(`/api/bookmarks/`); //${props.match.params.id}
				const data = await response.json();
				setBookmark(data);
				console.log('THis is data', data);
			} catch (error) {
				console.log('NO data'); // console.error(error);
			}
		})();
	}, []);

	const addBookmark = async e => {
		try {
			const response = await fetch(`/api/bookmarks/`, {
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
	//
	// // update ///
	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/bookmarks/`, {
				//${props.match.params.id}
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
			{Object.keys(bookmark).length ? ( // this may cause problems. google it
				<>
					<h3>{bookmark.title}</h3>
					<p>{bookmark.url}</p>
					<button onClick={handleDelete}>DELETE ME</button>
				</>
			) : (
				<h1>Loading...</h1>
			)}
			{/*<form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleUpdate}
      >
        {' '}
      </form>
      */}
		</div>
	);
}

// 	return (
// 		<div className="ShowPage">
// 			{Object.keys(bookmark).length ? (
// 				<>
// 					<h3>{bookmark.title}</h3>
// 					<p>{bookmark.url}</p>
// 					<button onClick={handleDelete}>DELETE ME</button>
// 				</>
// 			) : (
// 				<h1> Loading...</h1>
// 			)}
// 			{/*<form
// 				style={{ display: 'flex', flexDirection: 'column' }}
// 				onSubmit={handleUpdate}
// 			>
// 				{' '}
// 			</form>
//       */}
// 		</div>
// 	);
// }
