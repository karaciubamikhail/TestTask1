<script setup>
import { useProductsStore } from '@/store/productsStore'
import ProductCard from './ProductCard.vue'

const store = useProductsStore()
</script>

<template>
  <h3 class='head'>Название категории</h3>
  <div class="grid">
    <ProductCard
      v-for="p in store.products"
      :key="p.id"
      :product="p"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 785px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
.head{
  display:none;
  @media (max-width: 785px) {
   display:block;
   margin: 12px 0;
  }
}
</style>