<script>
  let {children, ...other} = $props();
</script>

<button class="w-[200px] bg-primary rounded-md font-medium text-on-primary hover:bg-primary-variant-1 px-4 py-1" {...other}>
    {@render children?.()}
</button>
