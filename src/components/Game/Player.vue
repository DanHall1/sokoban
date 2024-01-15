<template>
  <div class="absolute" :style="position">
    <img :src="keeper" alt="keeper" />
  </div>
</template>

<script lang="ts" setup>
import keeper from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { computed, onMounted, onUnmounted } from "vue";

useMove();
const { position } = usePosition();
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

function usePosition() {
  const { player } = usePlayerStore();
  const STEP = 32;
  const position = computed(() => ({
    top: `${player.y * STEP}px`,
    left: `${player.x * STEP}px`,
  }));
  return { position };
}
</script>

<style scoped>
.Player {
}
</style>
