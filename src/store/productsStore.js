import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const isLoading = ref(false)

  async function fetchProducts(filters) {
    isLoading.value = true

    await new Promise(r => setTimeout(r, 500))

    products.value = new Array(12).fill(null).map((_, i) => ({
      id: i + 1,
      title: `Название товара ${i + 1}`,
      brand: 'Бренд',                
      hot: i % 4 === 0,              
      price: 5990,
      oldPrice: 7990,
      discount: 25,
      available: i % 3 !== 0
    }))

    isLoading.value = false
  }

  return { products, isLoading, fetchProducts }
})