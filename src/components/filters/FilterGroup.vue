<script setup>
import { useSlots } from 'vue'

defineProps({ title: String })
const slots = useSlots()
</script>

<template>
  <div class="filter-group">
    <div 
      class="filter-header"  
      v-if="slots.actions && slots.actions().length"
    >
      <h3 class="title">{{ title }}</h3>
      <slot name="actions" />
    </div>

    <h3 
      class="title title--center"
      v-else
    >
      {{ title }}
    </h3>

    <slot name="input" />
    <slot />
  </div>
</template>

<style scoped>
.filter-group {
  margin-bottom: 28px;
}

.filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 16px;
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
}

.title--center {
  display: flex;
  justify-content: center;
}
</style>
