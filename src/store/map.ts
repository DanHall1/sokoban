import { defineStore } from "pinia"
import { Position } from "../composables/usePosition";

export enum MapTile {
  Wall = 1,
  Floor = 2
}

type Map = MapTile[][]


export const useMapStore = defineStore("mapStore", () => {
  const map: Map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position) {
    return map[position.y][position.x] === MapTile.Wall
  }

  return { map, setupMap, isWall }
})