import React from 'react'

export const Favorites = (props) => {

    let addedFaves = ""

    if (props.favorites) {
        addedFaves = props.favorites.map((favorites, index) => {
            return (
                <>
                    <div className ="favContainer"key={index}>
                        <p className='title'>{favorites.name}</p>
                        <p className='artist'>{favorites.artist}</p>
                        <p className='time'>{favorites.length}</p>
                    </div>
                </>
            )
        })
    }

    return (
        <div> 
        <h2>FAVORITES</h2>
        <div className="favoriteSong">
        {addedFaves}
        </div>
        </div>
    )
}

export default Favorites;