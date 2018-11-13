export const setMovies = (movies) => {
    // action - always return only object with data, no functionality can be done here
    return {
        type: 'SET_MOVIES',
        movies,
    };
};
export const setGenres = (genres) => {
    // action - always return only object with data, no functionality can be done here
    return {
        type: 'SET_GENRES',
        genres,
    };
};

export const setHearted = (hearted) => {
    return{
        type:'SET_HEARTED',
        hearted,
    };

};
export const setLog =(logs) => {
    return{
        type: 'SET_LOG',
        logs,
    };
};
