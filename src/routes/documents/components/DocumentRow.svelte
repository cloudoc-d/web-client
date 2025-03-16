<script>
  import Icon from "@iconify/svelte";
  let {name, date, onclick} = $props();
</script>

<div class="flex flex-row">
    <span class="font-medium text-base text-text grow">{name}</span>
    <div class="flex flex-row flex-nowrap justify-end gap-4">
        <span class="text-text-secondary">{date}</span>
        <button>
            <Icon icon="mdi:more-horiz" class='text-text text-2xl' />
        </button>
    </div>
</div>
