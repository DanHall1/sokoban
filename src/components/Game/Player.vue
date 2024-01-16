<template>
  <div class="absolute" :style="position">
    <img :src="keeper" alt="keeper" />
  </div>
</template>

<script lang="ts" setup>
import keeper from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { onMounted, onUnmounted } from "vue";
import { usePosition } from "../../composables/usePosition";

useMove();

const { player } = usePlayerStore();
const { position } = usePosition(player);

function useMove() {
  const {
    playerMoveToLeft,
    playerMoveToRight,
    playerMoveToDown,
    playerMoveToUp,
  } = usePlayerStore();

  function handleMove(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowUp":
        playerMoveToUp();
        break;
      case "ArrowDown":
        playerMoveToDown();
        break;
      case "ArrowLeft":
        playerMoveToLeft();
        break;
      case "ArrowRight":
        playerMoveToRight();
        break;
    }
  }
  onMounted(() => {
    window.addEventListener("keydown", handleMove);
  });
  onUnmounted(() => {
    window.removeEventListener("keydown", handleMove);
  });
}
</script>

<style scoped>
.Player {
}
</style>
