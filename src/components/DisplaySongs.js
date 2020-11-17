import React from 'react';

const DisplaySongs = (props) => {
    let songs = props.songs
    console.log("DisplaySongs songs: ", songs)

	return (
        <>
            {songs ? (
                <div id = 'song-list'>
                    {songs.map((song) => (
                        <article>
                            <section className='song-title'>{song.name}</section>
                            <section>{song.time}</section>
                            <section>{song.artist}</section>
                        </article>
                    ))}
                </div>
            ) : (
                <h1>Add Some Songs!</h1>
            )}
        </>
    )
};

export default DisplaySongs;
