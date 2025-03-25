<script>
  let {children, onclick = () => {}} = $props();
</script>

<div class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div class="bg-zinc-700 p-3 rounded-global shadow-lg">
        {@render children?.()}
    </div>
</div>
