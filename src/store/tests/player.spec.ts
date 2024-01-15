import { it, expect, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from "pinia"
import { usePlayerStore } from "../player";

describe('Player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
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