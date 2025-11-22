<script setup>
import { useFiltersStore } from '@/store/filtersStore'
import IconLogo from '../icons/IconLogo.vue'
import IconSearch from '../icons/IconSearch.vue'

const filters = useFiltersStore()
</script>

<template>
  <header class="header">
    <div class="header-left">
      <div class="header-logo">
        <IconLogo />
        <span>Логотип</span>
      </div>
      <button class="catalog-btn">Каталог</button>
      <div class="search-bar">
        <IconSearch class="search-icon" />
          <input
            class="search-input"
            v-model="filters.search"
            placeholder="Поиск по 100 000 товаров"
          />
        </div>
    </div>
    <nav class="header-nav">
      <a href="#">Информация о компании</a>
      <a href="#">Контакты</a>
      <a href="#">Полезные ссылки</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  background: white;
  gap:24px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  @media (max-width: 375px) {
    display: none;
  }
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-logo span {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
}

.catalog-btn {
  padding: 13.5px 22px;
  border-radius: 8px;
  border: 1px solid #73AFF4;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;  
}

.catalog-btn:hover {
  color: var(--color-font-hover);
}

.search-bar {
  flex: 1;
}

.search-input {
  width: 100%;
  height: 44px;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid #73AFF4;
  font-size: 15px;
  color: #5A5A5A;
}

.header-nav {
  display: flex;
  gap: 24px;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 375px) {
    display: none;
  }
}

.header-nav a {
  color: var(--color-font-main);
  text-decoration: none;
}

.header-nav a:hover {
    color: var(--color-font-hover);
}
.search-bar {
  position: relative;
  flex: 1;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  pointer-events: none; 
}

.search-input {
  width: 100%;
  height: 44px;
  padding: 10px 16px 10px 40px; 
  border-radius: 10px;
  border: 1px solid #73AFF4;
  font-size: 15px;
  color: #5A5A5A;
}
</style>
