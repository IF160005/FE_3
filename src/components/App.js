import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import {getGenres, getMovies} from '../thunks';
import { setHearted} from '../actions';
import {getGenresMovies} from "../thunks";

class App extends React.Component {
    constructor(props) {
        super(props);

        props.onGetMovies();
        props.onGetGenres();
    }

    addHeart = (id) => {
        const {hearted} = this.props;
        this.props.onSetHearted([...hearted, id]);
    };

    removeHeart = (id) => {
        let {hearted} = this.props;
        let index = hearted.indexOf(id);

        if (index > -1) {
            hearted.splice(index, 1);
        }

        this.props.onSetHearted([...hearted]);
    };
    render() {
        const {movieList} = this.props;
        const {genreList} = this.props;
        let {hearted} = this.props;

        return (
            <React.Fragment>
            <Genres genreList={genreList} loadGenre={this.loadGenre} onGetGenres={(id) => {
            this.props.onGetGenresMovies(id)
        }} onChangeList={this.setMovieList}/>

        <div className="cards">
            {movieList.map((movie) => (
                <Card
        key={movie.id}
        isHearted={hearted.includes(movie.id)}
        onAddHeart={() => this.addHeart(movie.id)}
        onRemoveHeart={() => this.removeHeart(movie.id)}
        movie={movie}
        />
    ))}
    </div>
        </React.Fragment>
    );
    }
}

export default connect(

    (state) => {
        return {
            movieList: state.movies.list,
            genreList: state.genres.list,
            hearted: state.hearted.list,
            logs: state.logs.list,
        };
    },

    (dispatch) => {
        return {
            onGetMovies: () => dispatch(getMovies()),
            onGetGenres: () => dispatch(getGenres()),
            onGetGenresMovies: (id) => dispatch(getGenresMovies(id)),
            onSetHearted: (hearted) => dispatch(setHearted(hearted)),

        };
    },
)(App);