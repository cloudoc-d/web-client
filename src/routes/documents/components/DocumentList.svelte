<script>
  import CreateDocumentCard from './CreateDocumentCard.svelte';
  import DocumentCard from './DocumentCard.svelte';
  import DocumentRow from './DocumentRow.svelte';
  import SecondaryButton from '#shared-components/buttons/SecondaryButton.svelte';
  import Dropdown from '#shared-components/Dropdown.svelte';
  import Icon from '@iconify/svelte';

  let {documents, onCreateDocument = () => {}} = $props();

  const SortOptions = {
    NAME: 'Name',
    LAST_VIEWED: 'Last time viewed',
    //LAST_EDITED: 'Last time edited',
  };

  let showAsCards = $state(true);
  let currentSortOption = $state(SortOptions.LAST_VIEWED);

  let documents_sorted = $derived(documents.toSorted(
    (a, b) => {
        if (currentSortOption === SortOptions.NAME)
          return a.name.localeCompare(b.name);
        else if (currentSortOption === SortOptions.LAST_VIEWED)
          return a.date > b.date;
    }
  ))

  let onShowAsListClicked = () => {showAsCards = false;};
  let onShowAsCardsClicked = () => {showAsCards = true;};
</script>

<div class="flex flex-col flex-nowrap gap-6">
    <div class="flex flex-row items-center gap-2">
        <!--<h2 class="text-2xl font-semibold text-zinc-200 color mt-[60px] mb-[22px] grow">Your documents</h2> -->
        <h2 class="text-2xl font-semibold text-text grow">Your documents</h2>
        {#if showAsCards}
            <SecondaryButton onclick={onShowAsListClicked}>
                <Icon icon="ic:baseline-list" class="text-text text-xl" />
            </SecondaryButton>
        {:else}
            <SecondaryButton onclick={onShowAsCardsClicked}>
                <Icon icon="ic:baseline-border-all" class="text-text text-xl" />
            </SecondaryButton>
        {/if}
        <div class="w-[2px] bg-border/50 h-[24px] me-2"></div>
        <div>
            <span class="text-text text-sm me-2">Sort by</span>
            <Dropdown text={currentSortOption}>
                <button class="block px-4 py-2 text-sm text-text cursor-pointer" onclick={() => {currentSortOption=SortOptions.NAME}}>Name</button>
                <!--<button class="block px-4 py-2 text-sm text-text" onclick={() => {currentSortOption=SortOptions.LAST_EDITED}}>Last time edited</button>-->
                <button class="block px-4 py-2 text-sm text-text cursor-pointer" onclick={() => {currentSortOption=SortOptions.LAST_VIEWED}}>Last time viewed</button>
            </Dropdown>
        </div>
    </div>
    {#if showAsCards}
        <div class="flex flex-row flex-wrap gap-6">
            <CreateDocumentCard onclick={onCreateDocument} />
            {#each documents_sorted as document}
                <DocumentCard {...document}/>
            {/each}
        </div>
    {:else}
        <div class="flex flex-col flex-nowrap gap-2">
            {#each documents_sorted as document}
                <DocumentRow {...document}/>
                <hr class="text-separator">
            {/each}
        </div>
    {/if}
</div>
