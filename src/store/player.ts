import { defineStore } from "pinia"
import { reactive } from "vue";
import { useMapStore } from "./map"


export const usePlayerStore = defineStore("player", () => {

  const player = reactive({
    x: 1,
    y: 1,
  });
  const { isWall } = useMapStore()

  function playerMoveToLeft() {
    if (isWall({ x: player.x - 1, y: player.y })) return
    player.x -= 1;
  }

  function playerMoveToRight() {
    if (isWall({ x: player.x + 1, y: player.y })) return
    player.x += 1;
  }

  function playerMoveToUp() {
    if (isWall({ x: player.x, y: player.y - 1 })) return
    player.y -= 1;
  }

  function playerMoveToDown() {
    if (isWall({ x: player.x, y: player.y + 1 })) return
    player.y += 1;
  }

  return { player, playerMoveToLeft, playerMoveToRight, playerMoveToUp, playerMoveToDown }

})