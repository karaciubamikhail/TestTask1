<script setup>
import ProductLogo from '../icons/ProductLogo.vue'
import IconFire from '../icons/IconFire.vue'
defineProps({
  product: Object
})
</script>

<template>
  <div class="card">

    <div class="img-wrap">
      <div class="tag-hot" v-if="product.hot">
        Хит продаж <IconFire/>
      </div>

      <div class="img">
        <ProductLogo />
      </div>

      <div class="tag-discount" v-if="product.discount">
        {{ product.discount }}%
      </div>
    </div>

    <div class="brand">Бренд</div>
    <div class="title">{{ product.title }}</div>

    <div class="price-wrap" v-if="product.available">
      <span class="price">{{ product.price }} ₽</span>
      <span class="old" v-if="product.oldPrice">{{ product.oldPrice }} ₽</span>
    </div>

    <button
      class="btn"
      :class="{ out: !product.available }"
    >
      {{ product.available ? "Купить" : "Сообщить о поступлении" }}
    </button>

  </div>
</template>

<style scoped>
.card {
  background: #fff;
  display: flex;
  flex-direction: column;
}

.img-wrap {
  position: relative;
  margin-bottom: 12px;
}

.img {
  height: 160px;
  background: #f3f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag-hot {
  font-family: 'PT Sans', sans-serif;
  position: absolute;
  top: 8px;
  left: 8px;
  background: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}

.tag-discount {
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: #7397F5;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
}

.brand {
  font-family: 'PT Sans', sans-serif;
  color: #AAAAAA;
  font-size: 14px;
  font-weight:400;
}

.title {
  font-size: 14px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  color: #333333;
  margin: 6px 0 12px 0;
}

.price-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.price {
  font-size: 20px;
  font-weight: 700;
}

.old {
  color: #aaa;
  text-decoration: line-through;
  font-size: 15px;
}

.btn {
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #7397F5;
  background: transparent;
  color: #7397F5;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: fit-content; 
}

.btn.out {
  width: 100%; 
  background: white;
  border: 1px solid #AAAAAA;
  color: #AAAAAA;
}
</style>
