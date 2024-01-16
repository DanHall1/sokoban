import { defineStore } from "pinia"
import { reactive } from "vue"

export const useCargoStore = defineStore("cargo", () => {

  const cargo = reactive([
    {
      x: 2,
      y: 2,
    },
    {
      x: 3,
      y: 3,
    },
  ])

  return {
    cargo
  }

})