<script>
  let {username, image_url, email, onclick, ...other} = $props();
</script>

<div {onclick} class="flex flex-row rounded-lg bg-sky-700 gap-x-[20px] items-center cursor-pointer border-1 border-sky-500 w-min p-4"> <!-- Profile component -->
    <img src="{image_url}" alt="avatar" class="rounded-full max-w-[60px]"/>
    <div class="flex flex-col gap-y-[2px]">
        <span class="text-xl font-medium text-sky-50 mb-[-5px]">{username}</span>
        <span class="text-base text-sky-200">{email}</span>
    </div>
</div>
