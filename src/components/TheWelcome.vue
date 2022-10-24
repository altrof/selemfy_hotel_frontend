<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import IconTooling from "@/components/icons/IconTooling.vue";
import CounterWithPinia from "@/components/CounterWithPinia.vue";
import FieldText from "@/components/FieldText.vue";
</script>

<template>

  <WelcomeItem>
    <template #icon>
      <IconTooling />
    </template>
    <template #heading>Counter with Pinia</template>

    <CounterWithPinia />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconTooling />
    </template>
    <template #heading>FieldText with Pinia</template>

    <FieldText />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>
</template>
