<script>
  import CreateDocumentCard from './components/CreateDocumentCard.svelte';
  import ProfileCardSmall from './components/ProfileCardSmall.svelte';
  import DocumentList from './components/DocumentList.svelte';
  import DocumentCreationDialog from './components/DocumentCreationDialog.svelte';

  import Modal from '#shared-components/Modal.svelte';
  import ClosableModal from '#shared-components/ClosableModal.svelte';
  import SecondaryButton from '#shared-components/buttons/SecondaryButton.svelte';
  import ScreenContainer from "#shared-components/ScreenContainer.svelte";

  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';

  import {ApiError, CloudocClient} from "#api/api.js";

  const client = new CloudocClient('asdfasdf');

  let user = {
    username: 'Zandari',
    image_url: 'http://placehold.co/50',
    email: 'nexsus.play@gmail.com',
  };

  let documents = $state();


  let isDark = $state(true);

  let showProfileModal = $state(false);
  let onProfileCardClicked = () => {showProfileModal = true;}

  let showCreateDocumentModal = $state(false);
  let onCreateDocumentClicked = () => {showCreateDocumentModal = true;};
  let onCloseCreateDocumentModal = () => {showCreateDocumentModal = false;};

  let onThemeSwitchClicked = () => {isDark = !isDark;};

  onMount(() => {
    documents = client.getDocumentsInfo()
  });

  let createDocument = (documentName) => {
    client.createDocument(documentName)

  };
</script>

<ScreenContainer {isDark}>
    <div class="max-w-[832px] mx-auto ps-5 pe-5">
        <div class="flex flex-row gap-1 justify-end items-center mt-[6px]">
            <SecondaryButton onclick={onThemeSwitchClicked}>
                <Icon class="text-lg text-text" icon="mdi:theme-light-dark"/>
            </SecondaryButton>
            <SecondaryButton onclick={()=>{}}>
                <Icon class="text-lg text-text" icon="mdi:bell"/>
            </SecondaryButton>
            <div class="w-[2px] bg-border/50 h-[24px] ms-2 me-2"></div>
            <ProfileCardSmall {...user} />
        </div>

        {#if showProfileModal}
            <ClosableModal onclose={onCloseProfileModal}>
                <p class="text-zinc-200">Hello world!</p>
            </ClosableModal>
        {/if}
        {#if showCreateDocumentModal}
            <ClosableModal onclose={onCloseCreateDocumentModal}>
                <DocumentCreationDialog onCreate={createDocument}/>
            </ClosableModal>
        {/if}

        <div class="mt-[20px] lg:mt-[60px]"></div>
        <DocumentList
            onCreateDocument={onCreateDocumentClicked}
            documents={documents}
        />
    </div>
</ScreenContainer>
