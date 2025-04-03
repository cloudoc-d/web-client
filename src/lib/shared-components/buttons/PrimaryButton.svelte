<script>
  let {children, ...other} = $props();
</script>

<button
    {...other}
    class={
      `w-[200px] bg-primary rounded-md \
      font-medium text-on-primary \
      hover:bg-primary-variant-1 px-4 py-1 ${other?.class}`
    }
>
    {@render children?.()}
</button>
