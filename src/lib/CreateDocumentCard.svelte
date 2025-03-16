<script>
  import Icon from '@iconify/svelte';

  let {onclick} = $props();
</script>

<button {onclick} class="flex w-[180px] h-[180px] p-[16px] bg-surface shadow-center border-1 border-border rounded-lg select-none cursor-pointer justify-center items-center">
    <div class="flex flex-col text-text-secondary text-center items-center">
        <Icon icon="mdi:note-plus" class="text-4xl mb-2"/>
        <span class="font-medium">Add Document</span>
    </div>
</button>
