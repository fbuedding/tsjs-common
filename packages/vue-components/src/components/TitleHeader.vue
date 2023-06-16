<script setup lang="ts">
import { vElementSize } from "@vueuse/components";

const props = defineProps<{
  width: number | string;
}>();

const emit = defineEmits<{
  (e: "heightChanged", height: number): void;
}>();

const onResize = ({ height }: { height: number }) => {
  emit("heightChanged", height);
};
</script>

<template>
  <header id="title-header-component" class="min-width">
    <div class="title-margin-div"></div>
    <h1
      id="title-heading"
      v-element-size="onResize"
      :style="{ width: props.width }"
    >
        <slot>Default Title, Test</slot>

    </h1>

    <div class="title-margin-div" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  text-decoration: none;
}

header * {
  flex-grow: 0;
}
header div {
  flex-grow: 1;
}

#title-header-component #title-heading {
  padding: var(--padding);
  min-width: fit-content;
}

@media screen and (max-width: 600px) {
  #title-header-component {
    position: sticky;
    top: 0;
  }
  #title-header-component .title-margin-div {
    display: none !important;
  }
  #title-header-component #title-heading {
    width: 100% !important;
  }
}
</style>
