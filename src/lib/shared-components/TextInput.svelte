<script>
  let {type="text", value=$bindable(), ...other} = $props();
</script>

<input
    {type}
    {...other}
    bind:value={value}
    class={
        `rounded-md bg-background px-3 py-2 \
        text-sm font-semibold text-text \
        ring-1 shadow-xs ring-border ring-inset ${other?.class}`
    }
/>
