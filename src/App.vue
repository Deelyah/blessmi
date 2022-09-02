<template>
  <div>
    <div class="fixed top-0 left-0 right-0">
      <TheHeader></TheHeader>
    </div>
    <div class="pt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  data() {
    return {};
  },
  computed: {},
  components: { TheHeader },
};
</script>
