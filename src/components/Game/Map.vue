<template>
  <div>
    <div v-for="row of map" class="flex">
      <div v-for="col of row">
        <img :src="wall" v-if="col === MapTile.Wall" alt="" />
        <img :src="floor" v-else-if="col === MapTile.Floor" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";
import { useMapStore, MapTile } from "../../store/map.ts";
const { map } = useMapStore();
</script>
