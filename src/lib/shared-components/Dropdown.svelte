<script>
  let {text, children} = $props();

  import Icon from '@iconify/svelte';

  let showMenu = $state(false);
  let onClick = () => {showMenu =! showMenu};
  let onFocusOut = ({relatedTarget, currentTarget}) => {
    // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return ;
    showMenu = false;
  };
</script>

<div class="relative inline-block text-left" onfocusout={onFocusOut}>
  <div>
    <button type="button" onclick={onClick} class="inline-flex w-full justify-center gap-x-1.5 rounded-global bg-background px-3 py-2 text-sm font-semibold text-text ring-1 shadow-xs ring-border ring-inset hover:bg-hover" aria-expanded="true" aria-haspopup="true">
        {text}
        <Icon class="text-text text-xl" icon="mdi:keyboard-arrow-down"/>
    </button>
  </div>

  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-global bg-background ring-1 shadow-lg ring-border focus:outline-hidden {showMenu ? '' : 'hidden'}" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
        {@render children?.()}
    </div>
  </div>
</div>
