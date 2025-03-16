<script>
  import CreateDocumentCard from './lib/CreateDocumentCard.svelte';
  import ProfileCard from './lib/ProfileCard.svelte';
  import DocumentCard from './lib/DocumentCard.svelte';
  import Modal from './lib/Modal.svelte';
  import ClosableModal from './lib/ClosableModal.svelte';
  import ProfileCardSmall from './lib/ProfileCardSmall.svelte';
  import DocumentList from './lib/DocumentList.svelte';
  import SecondaryButton from './lib/buttons/SecondaryButton.svelte';
  import Icon from '@iconify/svelte';

  let user = {
    username: 'Zandari',
    image_url: 'http://placehold.co/50',
    email: 'nexsus.play@gmail.com',
  };

  let documents = $state([
    {name: 'Отчётик', date: '29.03.2025'},
    {name: 'РПЗ по курсовой', date: '29.03.2025'},
    {name: 'Расчётно-пояснительная записка', date: '29.03.2025'},
    {name: 'Лаба 1', date: '19.03.2025'},
    {name: 'asdfsadfasdf', date: '29.03.2025'},
  ]);

  let isDark = $state(true);

  let showProfileModal = $state(false);
  let onProfileCardClicked = () => {showProfileModal = true;}
  let onCloseProfileModal = () => {showProfileModal = false;}

  let showCreateDocumentModal = $state(false);
  let onCreateDocumentClicked = () => {showCreateDocumentModal = true;};
  let onCloseCreateDocumentModal = () => {showCreateDocumentModal = false;};

  let onThemeSwitchClicked = () => {isDark = !isDark;};
</script>

<div class="h-[100vh] bg-background overflow-auto {isDark ? 'dark' : ''}">
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
            <Modal>
                Hello world!
            </Modal>
        {/if}

        <div class="mt-[20px] lg:mt-[60px]"></div>
        <DocumentList documents={documents} />
    </div>
</div>
