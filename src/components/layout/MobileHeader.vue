<script setup>
import { ref } from 'vue'
import IconBack from '@/components/icons/IconBack.vue'
import IconClose from '@/components/icons/IconClose.vue'

const query = ref('')
</script>

<template>
  <header class="mobile-header">
    <div class="toolbar">
      <button class="back-btn">
        <IconBack />
      </button>
      <div class="search-combo">
        <div class="search-box">
          <input
            v-model="query"
            placeholder="Запрос"
            class="search-input"
          />
          <button
            v-if="query"
            class="clear-btn"
            @click="query = ''"
          >
            <IconClose />
          </button>
        </div>
        <button class="search-btn">Найти</button>
      </div>

    </div>
  </header>
</template>


<style scoped>
.mobile-header {
  background: white;
  padding-top: env(safe-area-inset-top);
  max-width: 100%;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
}

.back-btn {
  background: none;
  border: none;
  padding: 6px;
  display: flex;
  align-items: center;
}

.search-combo {
  flex: 1;
  display: flex;
  height: 44px;
  background: #fff;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 8px;
  overflow: hidden;
}
.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 17px;
  font-family: 'Inter', sans-serif;
  max-width: 180px
}

.clear-btn {
  background: none;
  border: none;
  padding: 4px;
  opacity: 0.6;
  display: flex;
  align-items: center;
}

.search-btn {
  padding: 0 18px;
  background: #73AFF4;
  color: white;
  font-size: 17px;
  border: none;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
  border-left: 1px solid #dcdcdc;
}

</style>
