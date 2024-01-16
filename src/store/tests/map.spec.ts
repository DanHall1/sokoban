import { it, expect, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from "pinia"
import { useMapStore } from "../map"

describe("test", () => {
  beforeEach(() => {

    setActivePinia(createPinia())
  })
  it("should", () => {
    expect(true).toBe(true)
  })

  it("测试 setupMap 是否初始化数据", () => {
    const { setupMap, map } = useMapStore()
    const newMap = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ]

    setupMap(newMap)
    expect(map).toEqual(newMap)
  })
})