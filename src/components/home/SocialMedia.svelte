<script>
  import { socialMedia } from "../../constants";
</script>
<div class='animate-fade-in-down animate-delay-500 w-fit'>
  <hr class='border-px border-foreground my-3 w-full' />
  <ul class='mt-5 flex gap-5 px-2'>
    {#each socialMedia as socialMediaItem}
      <li class='list-none' title={socialMediaItem.label}>
        <a
          href={socialMediaItem.href}
          target='_blank'
          aria-label={socialMediaItem.label}
          rel='noopener noreferrer'
          class='group cursor-pointer'
        >
          <div class='fill-foreground h-6 w-6 transition-transform duration-150 ease-out group-hover:scale-110'>
            <svelte:component this={socialMediaItem.icon} />
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>
