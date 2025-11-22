<script setup>
import { useFiltersStore } from '@/store/filtersStore'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const store = useFiltersStore()

function select(category) {
  store.activeCategory = category.title
}
</script>

<template>
  <div class="categories">

    <template v-for="cat in items" :key="cat.title">

      <div
        class="item"
        :class="{ active: store.activeCategory === cat.title }"
        @click="select(cat)"
      >
        <span class="c">{{ cat.title }}</span>
        <span class="count">{{ cat.count }}</span>
      </div>

      <div
        v-if="Array.isArray(cat.children) && cat.children.length"
        class="children"
      >
        <div
          v-for="child in cat.children"
          :key="child.title"
          class="item child"
          :class="{ active: store.activeCategory === child.title }"
          @click="select(child)"
        >
          <span class="label">{{ child.title }}</span>
          <span class="count">{{ child.count }}</span>
        </div>
      </div>

    </template>

  </div>
</template>

<style scoped>
.categories {
  margin-bottom: 24px;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
}

.item:hover {
  background: #f2f6ff;
}

.item.active {
  background: #e4edff;
  color: #2a55e8;
}

.children {
  margin-left: 12px;
}

.child {
  padding-left: 12px;
}

.label {
  flex: 1;
  font-size: 14px; 
  font-weight: 400;
  color: #333333;
  font-family: 'PT Sans', sans-serif;
}

.count {
  color: #AAAAAA;
  font-size: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
}

</style>
