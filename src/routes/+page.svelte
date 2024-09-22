<script lang="ts">
    import { page } from '$app/stores';
    import { trpc } from '$lib/trpc/client';
    import { SignIn, SignOut } from '@auth/sveltekit/components';
  
    let greeting = 'press the button to load data';
    let loading = false;
  
    const loadData = async () => {
      loading = true;
      greeting = await trpc($page).greeting.query();
      console.log(greeting);
      
      loading = false;
    };
  </script>
  
<h5>Public Area</h5>

<div>
  {#if $page.data.session}
    Signed in as {$page.data.session.user?.name}
    <SignOut>
      <div slot="submitButton">Sign out</div>
    </SignOut>
  {:else}
    <span>You are not signed in</span>
    <SignIn provider="github"/>
  {/if}
</div>

  <h6>Loading data in<br /><code>+page.svelte</code></h6>
  
  <a
    href="#load"
    role="button"
    class="secondary"
    aria-busy={loading}
    on:click|preventDefault={loadData}>Load</a
  >
  <p>{greeting}</p>