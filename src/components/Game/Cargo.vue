<template>
  <div class="absolute" :style="position">
    <img :src="cargoImg" alt="keeper" />
  </div>
</template>

<script lang="ts" setup>
import cargoImg from "../../assets/cargo.png";
import { usePosition } from "../../composables/usePosition";
interface Position {
  x: number;
  y: number;
}
const props = defineProps<Position>();
const { position } = usePosition(props);
</script>

<style scoped></style>
