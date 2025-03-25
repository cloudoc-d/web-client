<script>
  let {children, isDark = true} = $props();
</script>

<div class="h-[100vh] bg-background overflow-auto {isDark ? 'dark' : ''}">
    {@render children?.()}
</div>
