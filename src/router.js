import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Product from "@/views/Product.vue";
import ProductList from "@/views/ProductList.vue";
import ProductHome from "@/views/Product/Home.vue";
import ProductReview from "@/views/Product/Review.vue";
import ProductReviewDetail from "@/views/Product/ReviewDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/products",
      component: ProductList
    },
    {
      // 正規表現でidに数字のみくるようにする
      path: "/products/:id(\\d+)",
      component: Product,
      // props: true,
      props: route => ({ id: Number(route.params.id) }),
      children: [
        { name: "product-home", path: "", component: ProductHome },
        { name: "product-review", path: "review", component: ProductReview },
        {
          name: "review-detail",
          path: "review/:rid",
          component: ProductReviewDetail
        }
      ]
    }
  ]
});
