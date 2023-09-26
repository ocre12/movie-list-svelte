<script>
    import MovieCard from "./MovieCard.svelte";
    import {movies} from "./movie.store.js";
</script>

<svelte:head>
    <title>Movies</title>
    <meta name="description" content="A list of quality movies" />
</svelte:head>

<h1>Movies list</h1>

{#if $movies.length > 0}
    <div class="movie-list">
        {#each $movies as movie}
            <MovieCard {...movie} />
        {/each}
    </div>
{:else}
    <div class="no-movie">
        <h3>No movie found</h3>
    </div>
{/if}

<style>
    .movie-list {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .no-movie {
        text-align: center;
    }

    .no-movie > h3 {
        font-size: 4rem;
    }
</style>
