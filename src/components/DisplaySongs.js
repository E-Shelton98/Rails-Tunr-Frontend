import React from 'react';
import './DisplaySongs.css';
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
							<section className='song-time'>{song.time}</section>
							<section className='song-artist'>{song.artist}</section>
							<div className='song-buttons'>
								<button className='song-delete'
									onClick={() => {
										props.removeSong(song);
										props.history.push('/');
									}}>Delete</button>
								<button className='song-favorite'
									onClick={() => {
										props.onFaveToggle(song);
										props.history.push('/');
									}}>
									Favorite
								</button>
							</div>
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
