<script setup>
import CategoryList from './CategoryList.vue'
import FilterGroup from './FilterGroup.vue'
import PriceRange from './PriceRange.vue'
import CheckboxList from './CheckboxList.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

const categories = [
  {
    title: 'Название категории',
    count: 3,
    children: [
      { title: 'Название категории', count: 3 },
      { title: 'Название категории', count: 3 },
      { title: 'Название категории', count: 3 }
    ]
  }
]
</script>

<template>
  <div class="filters">

    <CategoryList :items="categories" />

    <FilterGroup title="Цена">
      <PriceRange />
    </FilterGroup>

    <FilterGroup title="Бренд">
      <template #actions>
        <button class="clear-btn" @click="filtersStore.brands = []">
          Очистить
        </button>
      </template>
        <template #input>
  <div class="search-wrapper">
    <IconSearch class="search-icon" />
    <input
      v-model="brandSearch"
      placeholder="Поиск"
      class="search-input"
    />
  </div>
</template>
      

      <CheckboxList
        searchable
        :items="[
          { label: 'Nike', count: 120 },
          { label: 'Adidas', count: 83 },
          { label: 'Puma', count: 41 },
          { label: 'Reebok', count: 12 }
        ]"
        storeKey="brands"
      />
    </FilterGroup>

    <FilterGroup title="Размер">
      <CheckboxList
        :items="[
        { label: 'S', count: 120 },
        { label: 'M', count: 83 },
        { label: 'L', count: 41 },
        { label: 'XL', count: 12 }
        ]"
        storeKey="sizes"
      />
    </FilterGroup>

  </div>
</template>

<style scoped>
.filters {
  max-width: 280px;
}
.clear-btn {
  font-size: 12px;
  color: #999;
  border: none;
  background: none;
  cursor: pointer;
}
.clear-btn:hover {
  color: #333;
}
.search-input {
  width: 100%;
  height: 32px;
  padding: 6px 10px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  margin: 16px 0;
}

.search-input:focus {
  border-color: #4A6CF7;
  box-shadow: 0 0 0 2px rgba(74, 108, 247, 0.2);
}

.search-input::placeholder {
  color: #aaa;
}

.search-wrapper {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  pointer-events: none;
  opacity: 0.6;
}

.search-input {
  width: 100%;
  height: 32px;
  padding: 6px 10px 6px 32px; /* добавили место под иконку */
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  margin: 16px 0;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
</style>
