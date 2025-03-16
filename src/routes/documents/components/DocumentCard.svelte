<script>
  import Icon from '@iconify/svelte';

  let {name, date, onclick} = $props();
</script>

<div class="flex flex-col w-[180px] h-[180px] p-[16px] border-1 border-border shadow-center bg-surface rounded-lg">
    <a {onclick} class="font-medium text-base text-text cursor-pointer grow">{name}</a>
    <div class="flex flex-row">
        <span class="text-text-secondary grow">{date}</span>
        <button>
            <Icon icon="mdi:more-horiz" class='text-text text-2xl' />
        </button>
    </div>
</div>
