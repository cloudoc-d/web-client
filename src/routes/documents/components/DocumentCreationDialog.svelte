<script>
  import TextInput from "#shared-components/TextInput.svelte";
  import PrimaryButton from "#shared-components/buttons/PrimaryButton.svelte";

  let {onCreate} = $props();

  let documentName = $state('');

</script>

<div class="flex flex-col gap-1">
    <span class="text-text">New document name</span>
    <TextInput bind:value={documentName} />
    <PrimaryButton onclick={() => onCreate(documentName)}>Create</PrimaryButton>
</div>
