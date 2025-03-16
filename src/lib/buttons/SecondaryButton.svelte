<script>
  let {onclick, children, ...other} = $props();
</script>

<button onclick={onclick} class="rounded-md hover:bg-hover p-2 {other.class}">
    {@render children?.()}
</button>
