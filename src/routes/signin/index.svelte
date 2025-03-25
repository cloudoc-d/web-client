<script>
  // передаю этот челендж следующему
  import ScreenContainer from "#shared-components/ScreenContainer.svelte";
  import TextInput from "#shared-components/TextInput.svelte";

  let username = $state('');
  let password = $state('');

  let onSignInClicked = () => {
    //
  };
</script>

    <div class="max-w-[400px] mt-[80px] lg:mt-[120px] mx-auto p-4 rounded-lg border-2 border-border bg-surface text-text">
        <div class="flex flex-col gap-1">
            <h1 class="font-bold text-xl">Sign in to your account</h1>
            <div class="flex flex-col gap-2">
                <span>Username or email</span>
                <TextInput bind:value={username}/>
            </div>
            <div class="flex flex-col gap-2">
                <span>Password</span>
                <TextInput type="password" bind:value={password}/>
            </div>
            <button class="w-[200px] bg-primary rounded-md font-medium text-on-primary hover:bg-primary-variant-1 px-4 py-1">Log in!</button>
        </div>
    </div>

<ScreenContainer>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
        <div>
        <label for="username" class="block text-sm/6 font-medium text-text">Email address</label>
        <div class="mt-2">
            <TextInput name="username" id="username" bind:value={username}/>
        </div>
        </div>

        <div>
        <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-text">Password</label>
            <div class="text-sm">
                <a href="#" class="font-semibold text-primary hover:text-primary-variant-1">Forgot password?</a>
            </div>
        </div>
        <div class="mt-2">
            <TextInput type="password" name="password" id="password" bind:value={username}/>
        </div>
        </div>

        <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
    </div>
</ScreenContainer>
