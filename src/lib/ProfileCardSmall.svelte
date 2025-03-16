<script>
  import SecondaryButton from "./buttons/SecondaryButton.svelte";
  let {username, image_url, email} = $props();
  let onClick = () => {};
</script>

<SecondaryButton onclick={onClick}>
    <div class="flex flex-row flex-nowrap items-center gap-3">
        <img src={image_url} alt="profile" class="rounded-full w-[36px]" />
        <span class="text-text font-lg font-medium">{username}</span>
    </div>
</SecondaryButton>
