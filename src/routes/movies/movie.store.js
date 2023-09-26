import {writable} from "svelte/store";

export const movies = writable([]);

async function storeInit() {
    try {
        const apiResponse = await fetch('http://localhost:3000/movies');
        movies.set(await apiResponse.json());
    } catch (e) {
        console.error(e);
    }
}

/**
 * Toggle the like state of a movie
 * @param {string} id Id of the movie to toggle like
 * @returns {Promise<void>}
 * */
export async function likeMovie(id) {
    try {
        const apiResponse = await fetch(`http://localhost:3000/movies/like/${id}`,{
            method: 'PATCH',
        });
        const updatedMovie = await apiResponse.json();
        movies.update((list) => list.reduce((newList, currentMovie) => {
            if (currentMovie.id === updatedMovie.id) {
                return [...newList, updatedMovie];
            } else {
                return [...newList, currentMovie];
            }
        }, []));
    } catch (e) {
        console.error(e);
    }
}

storeInit();