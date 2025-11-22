<script setup>
import { useFiltersStore } from '@/store/filtersStore'
const store = useFiltersStore()
</script>

<template>
  <div class="price-range">
    <div class="input-wrap">
      <span class="prefix">от</span>
      <input v-model.number="store.price.min" type="number" />
    </div>

    <span class="line">—</span>

    <div class="input-wrap">
      <span class="prefix">от</span>
      <input v-model.number="store.price.max" type="number" />
    </div>
  </div>
</template>

<style scoped>
.price-range {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
}


.input-wrap {
  position: relative;
  flex: 1;
}
.input-wrap input{
  font-size:14px;
  font-weight: 400;
  color: #333333;
}


.prefix {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 13px;
  pointer-events: none;
}

input {
  width: 100%;
  padding: 8px 10px 8px 34px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
}

.line {
  color: #bbb;
  font-size: 16px;
}
</style>
