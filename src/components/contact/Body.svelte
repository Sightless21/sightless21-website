<script lang="ts">
    // @ts-nocheck
    import { m } from '$lib/paraglide/messages';
    import { contactItems } from '../../constants';
    const { lang } = $props();
</script>

<main
    class="relative z-10 mt-10 min-h-screen w-full items-center justify-center text-foreground px-6 sm:mt-16 sm:px-10 md:mt-20 md:px-24"
>
    <div class="space-y-4 p-0 sm:space-y-5 sm:p-5 md:p-10" id="info">
        <h1
            class="font-prata animate-fade-in-down animate-delay-300 text-[10vw] leading-[0.95em] uppercase sm:text-[8vw] md:text-[7vw] lg:text-[6vw]"
        >
            {m[`contact.h1`]()}
        </h1>
        <h2 class="animate-fade-in-down animate-delay-400 block text-base sm:text-lg md:text-xl">
            {m[`contact.description`]()}
        </h2>

        <div class="space-y-2 sm:space-y-3">
            {#each contactItems as item, index}
                <p class={`animate-fade-in-down animate-delay-${(index + 4) * 100} text-sm sm:text-base`}>
                    {item.label}
                    <a href={`mailto:${item.link}`} target="_blank" class="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
                        {item.subLabel}
                    </a>
                </p>
            {/each}
            <p
                class={`animate-fade-in-down animate-delay-${(contactItems.length + 4) * 100} w-fit text-sm sm:text-base`}
            >
                <a
                    href={`/pdf/Phanupong_Poungbaidee_CV.pdf`}
                    download="Phanupong_Poungbaidee_CV.pdf"
                    target="_blank"
                    class="hover-underline-animation-reverse block cursor-pointer"
                >
                    {lang === 'ja' ? '履歴書をダウンロード' : 'Download CV'}
                </a>
            </p>
        </div>
    </div>
</main>