<script>
  import EditorJS from "@editorjs/editorjs";

  import ScreenContainer  from "#shared-components/ScreenContainer.svelte";
    import { onMount } from "svelte";

  onMount(() => {
    const editor = new EditorJS({
      holder: "editorjs",
    })
  })
</script>

<ScreenContainer isDark={false}>
    <div>
        <a href="/documents">Go home</a>
    </div>
    <div id="editorjs" class="w-full border-1">
    </div>
</ScreenContainer>
