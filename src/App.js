import React from 'react';
import { Route } from 'react-router-dom';
import DisplaySongs from './components/DisplaySongs';
import Form from './components/Form';
import './App.css';

function App() {
	//URL for backend rails database
	const url = 'https://rails-tunr-api.herokuapp.com';

	//State for songs array in playlist
	const [songs, setSongs] = React.useState([]);

	//Empty Song Object for form
	const emptySong = {
		name: '',
		artist: '',
    time: '',
    favorite: false
	};

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////

	//getSongs function to fetch songs from heroku backend.
	const getSongs = () => {
		fetch(url + '/songs')
			.then((res) => res.json())
			.then((data) => setSongs(data));
	};

	//Get songs on page load
	React.useEffect(() => {
		getSongs();
	}, []);

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////

	//handleCreate Function for creating songs in playlist
	const handleCreate = (newSong) => {
		console.log(newSong);
		fetch(url + '/songs/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSong),
		});
	};

	//deleteSong Function for deleting a song from playlist
	const removeSong = (song) => {
		fetch(url + '/song/' + song._id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			getSongs();
		});
	};

	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////

	//Return App Components to build webpage
	return (
		<div className='App'>
			<header>
				<h1 id='head-title'>Tunr.</h1>
				<h2 id='head-subtitle'>For all your playlist needs</h2>
				<hr id='red-divider' />
			</header>
			<main>
				<div id='playlist-div'>
					<h3 id='playlist-head'>Playlist 1</h3>
					<Route
						exact
						path='/'
						render={(rp) => (
							<DisplaySongs {...rp} songs={songs} removeSong={removeSong} />
						)}
					/>
				</div>
				<Route
					exact
					path='/'
					render={(rp) => (
						<Form
							{...rp}
							label='create'
							song={emptySong}
							handleSubmit={handleCreate}
						/>
					)}
				/>
			</main>
		</div>
	);
}

export default App;
