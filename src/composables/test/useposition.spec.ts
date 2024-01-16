import { it, expect, describe } from 'vitest'
import { usePosition } from "../usePosition"
import { reactive } from 'vue'

describe("happy path", () => {
  it("渲染正确的位置", () => {
    const pos = { x: 1, y: 1 }
    const { position } = usePosition(pos)

    expect(position.value).toEqual({
      top: "32px",
      left: "32px",
    })
  })

  it("玩家移动", () => {
    const pos = reactive({ x: 1, y: 1 })
    const { position } = usePosition(pos)

    pos.x = 2
    expect(position.value).toEqual({
      top: "32px",
      left: "64px",
    })
  })
})