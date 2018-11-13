import React from 'react';

export default class Genres extends React.Component {

    render() {
        const {genreList, onGetGenres} = this.props;
        return (
            <div className="genres">
                {genreList.map((genre) => (
                    <div key={genre.id} className="genre" onClick={() => {
                        onGetGenres(genre.id)
                    }}>
                        {genre.name}
                    </div>
                ))}
            </div>
        );
    }
}


