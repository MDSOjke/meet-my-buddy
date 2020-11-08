<script>
    // your script goes here
</script>

<style>
    .nu-card{
        @apply rounded-lg p-4 w-1/2 mx-auto;
        box-shadow: 3px 3px 6px var(--light-bg-dark-shadow),-3px -3px 6px var(--light-bg-light-shadow);
        background-color: var(--light-bg);
    }
</style>

<div class="nu-card">
    <slot></slot>
</div>