<template>
  <div class="Game">
    <Map />
    <Player />
    <template v-for="position in cargo">
      <Cargo :="position" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import { useCargoStore } from "../../store/cargo";
const { cargo } = useCargoStore();
</script>

<style scoped>
.Game {
}
</style>
