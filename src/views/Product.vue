<template>
  <div class="product" v-if="item" key="product">
    <h1>商品情報</h1>
    <!-- <p>このページは、ID.{{ $route.params.id }}の詳細を表示</p> -->
    <!-- <p>このページは、ID.{{ id }}の詳細を表示</p> こっちのが良い -->
    <dl class="product-table">
      <dt>商品名</dt>
      <dd>{{ item.name }}</dd>
      <dt>価格</dt>
      <dd>{{ item.price }}</dd>
      <dt>商品説明</dt>
      <dd>{{ item.content }}</dd>
    </dl>
    <nav class="nav">
      <router-link :to="{name: 'product-home'}" exact>商品</router-link>
      <router-link :to="{name: 'product-review'}">レビュー</router-link>
    </nav>
    <!-- ここに子ルートを埋め込む -->
    <router-view />
  </div>
  <div v-else key="loading">商品情報を読み込んでいます</div>
</template>

<script>
import products from "@/api/products.js";
import { mapGetters } from "vuex";

export default {
  props: { id: Number },
  computed: mapGetters("product", ["detail"]),
  data() {
    return { item: null };
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, item => {
          this.item = item;
        });
      },
      immediate: true
    }
  }
};
</script>
