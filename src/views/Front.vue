<template>
  <nav class="navbar navbar-expand-lg navbar-light py-0">
    <div class="container-fluid px-3 px-lg-5 position-relative">
      <router-link class="navbar-brand py-0 me-4" to="/">
        <h1 class="position-absolute h6">藍天野球</h1>
        <img src="../assets/images/logo.png" width="100" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler py-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="material-icons mb-0 text-primary">menu</span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/'}" to="/">
              <span class="px-3">首頁</span>
              <div class="d-block underlineBox mt-3"></div>
            </router-link>
          </li>
          <li class="nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/products'}" to="/products">
              <span class="px-3">產品列表</span>
              <div class="d-block underlineBox mt-3"></div>
            </router-link>
          </li>
          <li class="nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/blog'}" to="/blog">
              <span class="px-3">棒球專欄</span>
              <div class="d-block underlineBox mt-3"></div>
            </router-link>
          </li>
          <li class="d-block d-lg-none nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/cart'}" to="/cart">
              <span class="px-3">購物車</span>
              <div class="d-block underlineBox mt-3"></div>
            </router-link>
          </li>
          <li class="d-block d-lg-none nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/favorite'}" to="/favorite">
              <span class="px-3">喜愛商品</span>
              <div class="d-block underlineBox mt-3"></div>
            </router-link>
          </li>
          <li class="d-block d-lg-none nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/login'}" to="/login">
              <span class="px-3">後台登入</span>
              <div class="d-block underlineBox mt-3"></div>
            </router-link>
          </li>
        </ul>
        <ul class="d-none d-lg-flex navbar-nav mb-0">
          <li class="nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/cart'}" to="/cart">
              <span class="material-icons px-3">shopping_cart</span>
              <div class="d-block underlineBox mt-2"></div>
            </router-link>
          </li>
          <li class="nav-item p-0">
            <router-link class="nav-link pb-0 pt-3" :class="{ 'active' : tab === '/favorite'}" to="/favorite">
              <span class="material-icons px-3">favorite</span>
              <div class="d-block underlineBox mt-2"></div>
            </router-link>
          </li>
          <li class="nav-item p-0">
            <router-link class="nav-link button11 pb-0 pt-3" :class="{ 'active' : tab === '/login'}" to="/login">
              <span class="material-icons px-3">manage_accounts</span>
              <div class="d-block underlineBox mt-2"></div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.navbar-brand h1 {
  text-indent: 110%;
  white-space: nowrap;
  overflow: hidden;
}
.navbar-toggler {
  color: transparent;
  border: none;
  .material-icons {
    font-size: 32px;
  }
}
.navbar-collapse {
  @media (max-width: 991px) {
    position: absolute;
    width: 100%;
    top: 44px;
    left: 0;
    background-color: white;
    z-index: 1100;
  }
}
.navbar {
  z-index: 1110;
  .nav-link {
    font-weight: bolder;
    &.active,&:hover {
      color: #41acfa;
      .underlineBox {
        width: 100%;
      }
    }
    .underlineBox {
      height: 3px;
      width: 0%;
      background-color: #41acfa;
      transition: width 0.3s ease;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {};
  },
  computed: {
    tab () {
      return this.$route.path;
    }
  }
};
</script>
