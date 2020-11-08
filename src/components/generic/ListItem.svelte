<script>
    export let active = false
</script>

<style>
    .nu-list-item{
        @apply rounded-sm;
    }

    .nu-list-item.active{
        box-shadow: var(--box-shadow-inset)
    }
</style>

<div class="nu-list-item" class:active>
    <slot></slot>
</div>