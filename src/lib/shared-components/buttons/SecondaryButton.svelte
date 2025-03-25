<script>
  let {onclick, children, ...other} = $props();
</script>

<button onclick={onclick} class="rounded-global hover:bg-hover p-2 {other.class}">
    {@render children?.()}
</button>
