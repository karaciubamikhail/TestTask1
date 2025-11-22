import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFiltersStore = defineStore('filters', () => {
  const search = ref('')

  const activeCategory = ref(null)

  const brands = ref([])
  const sizes = ref([])

  const price = ref({
    min: 0,
    max: 5000
  })

  return {
    search,
    activeCategory,
    brands,
    sizes,
    price
  }
})
