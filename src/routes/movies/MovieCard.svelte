<script>
    import {likeMovie} from "./movie.store.js";
    import IoIosStar from 'svelte-icons/io/IoIosStar.svelte';
    import IoIosStarOutline from 'svelte-icons/io/IoIosStarOutline.svelte';

    export let name;
    export let imageUrl;
    export let year;
    export let duration;
    export let id;
    export let like;

    let formattedDuration = `${(duration / 60) | 0}h${duration % 60}min`;
</script>

<div class="card">
    <div class="movie-poster">
        <img src="{imageUrl}" alt="{`${name} poster`}" />
    </div>
    <div class="movie-infos">
        <h3>{name}</h3>
        <p>Parution: {year}</p>
        <p>Duration: {formattedDuration}</p>
        <button on:click={likeMovie(id)} class="like-icon-btn">
            {#if like}
                <IoIosStar/>
            {:else }
                <IoIosStarOutline/>
            {/if}
        </button>
    </div>
</div>

<style>
    .card {
        padding: 2rem;
        display: flex;
        border: #444444 1px solid;
        border-radius: 2rem;
        gap: 2rem;
    }

    .card > .movie-poster > img {
        height: 300px;
        width: 200px;
        object-fit: cover;
    }

    .like-icon-btn {
        border: none;
        padding: 0;
        background-color: transparent;
        color: darkgoldenrod;
        height: 6rem;
    }
</style>