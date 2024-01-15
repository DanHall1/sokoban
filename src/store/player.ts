import { defineStore } from "pinia"
import { reactive } from "vue";


export const usePlayerStore = defineStore("player", () => {

  const player = reactive({
    x: 1,
    y: 1,
  });

  function playerMoveToLeft() {
    player.x -= 1;
  }

  function playerMoveToRight() {
    player.x += 1;
  }

  function playerMoveToUp() {
    player.y -= 1;
  }

  function playerMoveToDown() {
    player.y += 1;
  }

  return { player, playerMoveToLeft, playerMoveToRight, playerMoveToUp, playerMoveToDown }

})