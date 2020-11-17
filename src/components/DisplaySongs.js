import React from 'react';

const DisplaySongs = (props) => {
	let songs = props.songs;
	console.log('DisplaySongs songs: ', songs);

	return (
		<>
			{songs ? (
				<div id='song-list'>
					{songs.map((song) => (
						<article>
							<section className='song-title'>{song.name}</section>
							<section>{song.time}</section>
							<section>{song.artist}</section>
							<section
								className='delete'
								onClick={() => {
									props.removeSong(song);
									props.history.push('/');
								}}>
								X
							</section>
							<button
								onClick={() => {
									props.onFaveToggle(song);
									props.history.push('/');
								}}>
								Favorite
							</button>
						</article>
					))}
				</div>
			) : (
				<h1>Add Some Songs!</h1>
			)}
		</>
	);
};

export default DisplaySongs;
