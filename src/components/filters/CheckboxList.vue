<script setup>
import { useFiltersStore } from '@/store/filtersStore'

const props = defineProps({
  items: Array,
  storeKey: String
})

const store = useFiltersStore()

function toggle(item) {
  const list = store[props.storeKey]
  if (list.includes(item)) {
    store[props.storeKey] = list.filter(i => i !== item)
  } else {
    store[props.storeKey].push(item)
  }
}
</script>

<template>
  <div class="checkbox-list">
    <label v-for="i in items" :key="i" class="row">
      <input
        type="checkbox"
        :checked="store[storeKey].includes(i)"
        @change="toggle(i)"
      />

      <span class="name">{{ i.label }}</span>

      <span class="count">{{ i.count }}</span>
    </label>
  </div>
</template>

<style scoped>
.checkbox-list {
  max-height: 220px;
  overflow-y: auto;
  padding-right: 6px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 6px 0;
  cursor: pointer;
  font-size: 14px;
}

.name {
  flex: 1;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}

.count {
  color: #AAAAAA;
  font-size: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>