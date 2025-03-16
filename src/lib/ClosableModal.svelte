<script>
  import Modal from './Modal.svelte';
  import Icon from '@iconify/svelte';

  let {children, onclose} = $props();
</script>

<Modal>
    <div class="flex flex-row w-full justify-end p-0 m-0">
        <button class="cursor-pointer" onclick={onclose}>
            <Icon class="text-xl text-zinc-200" icon="mdi:close"/>
        </button>
    </div>
    {@render children?.()}
</Modal>
