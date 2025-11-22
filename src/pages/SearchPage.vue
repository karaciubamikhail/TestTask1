<script setup>
import SidebarFilters from '@/components/filters/SidebarFilters.vue'
import Toolbar from '@/components/layout/Toolbar.vue'
import MobileHeader from '@/components/layout/MobileHeader.vue'
import ProductGrid from '@/components/products/ProductGrid.vue'
import { useProductsStore } from '@/store/productsStore'
import { useFiltersStore } from '@/store/filtersStore'
import { watchEffect } from 'vue'

const productsStore = useProductsStore()
const filtersStore = useFiltersStore()

watchEffect(() => {
  productsStore.fetchProducts(filtersStore)
})
</script>

<template>
  <MobileHeader class="mobile-only" />  
  <Toolbar class="desktop-only" />
    <div class="page">
      <aside class="sidebar">
        <SidebarFilters />
      </aside>

      <main class="content">
        <ProductGrid />
      </main>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  gap: 20px;
  padding: 0px 100px;
  background: white;
  @media (max-width: 375px) {
    padding: 0px 16px;
  }
}
.sidebar {
  width: 260px;
  margin-top:24px;
  @media (max-width: 525px) {
    display: none;
  }
}
.content {
  flex: 1;
  margin-top:24px;
}
.mobile-only {
  display: none;
}
.desktop-only {
  display: flex;
}
@media (max-width: 785px) {
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }
}
</style>