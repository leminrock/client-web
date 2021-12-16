<script>
    export let name;
</script>

<main>
    <h1>{name}</h1>
    <p>
        Visit <a href="https://github.com/leminrock"
            >Linux Embedded Music in Rock repositories organization</a
        >
    </p>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
