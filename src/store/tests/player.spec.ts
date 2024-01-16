import { it, expect, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from "pinia"
import { usePlayerStore } from "../player";
import { useMapStore } from "../map"

describe('Player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })


  describe("normal move", () => {
    beforeEach(() => {

      const { setupMap } = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    });
    it("玩家向左移动", () => {
      const { player, playerMoveToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      playerMoveToLeft()

      expect(player.x).toBe(0)
    })
    it("玩家向右移动", () => {
      const { player, playerMoveToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      playerMoveToRight()

      expect(player.x).toBe(2)
    })
    it("玩家向上移动", () => {
      const { player, playerMoveToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      playerMoveToUp()

      expect(player.y).toBe(0)
    })
    it("玩家向下移动", () => {
      const { player, playerMoveToDown } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      playerMoveToDown()

      expect(player.y).toBe(2)
    })
  })


  describe("检测触碰墙壁", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ])
    })

    it("测试玩家向左移动触碰墙壁", () => {
      const { player, playerMoveToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      playerMoveToLeft()

      expect(player.x).toBe(1)
    })
    it("测试玩家向右移动触碰墙壁", () => {
      const { player, playerMoveToRight } = usePlayerStore();
      player.x = 3;
      player.y = 1;
      playerMoveToRight()

      expect(player.x).toBe(3)
    })
    it("测试玩家向上移动触碰墙壁", () => {
      const { player, playerMoveToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      playerMoveToUp()

      expect(player.y).toBe(1)
    })
    it("测试玩家向下移动触碰墙壁", () => {
      const { player, playerMoveToDown } = usePlayerStore();
      player.x = 1;
      player.y = 3;
      playerMoveToDown()

      expect(player.y).toBe(3)
    })
  })
})