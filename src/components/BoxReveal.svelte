<script>
  import { inview } from "svelte-inview";
  import { Motion, useAnimation } from "svelte-motion";

  let { 
    width = "fit-content", 
    boxColor = "", 
    duration = 0.5, 
    children 
  } = $props();

  let mainControls = useAnimation();
  let sideControls = useAnimation();

  const viewEnter = () => {
    mainControls.start("visible");
    sideControls.start("visible");
  };

  const viewLeave = () => {
    mainControls.start("hidden");
    sideControls.start("hidden");
  };
</script>
  
<div
  class="relative overflow-hidden"
  style="width:{width}"
  use:inview
  oninview_enter={viewEnter}
  oninview_leave={viewLeave}
>
  <Motion
    let:motion
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: duration, delay: 0.25 }}
  >
    <div use:motion>
      {#if children}
        {@render children()}
      {:else}
        Default
      {/if}
    </div>
  </Motion>

  <Motion
    let:motion
    variants={{
      hidden: { left: 0 },
      visible: { left: "100%" },
    }}
    initial="hidden"
    animate={sideControls}
    transition={{ duration: duration, ease: "easeIn" }}
  >
    <div
      style="background:{boxColor}"
      class="absolute top-1 bottom-1 left-0 right-0 z-40 bg-foreground"
      use:motion
    ></div>
  </Motion>
</div>
  