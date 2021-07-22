<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white border-bottom border-4 border-primary"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand py-0 me-4" to="/admin">
        <h1 class="position-absolute">藍天野球</h1>
        <img src="../assets/images/logo.png" width="100" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >產品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons"
              >優惠券</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/articles"
              >貼文</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </div>
        <div class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/cart">模擬購物車</router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <div v-if="login" class="alert alert-success position-fixed" role="alert">
    登入成功
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
  <div v-else class="alert alert-danger position-fixed" role="alert">
    登入失敗
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<style lang="scss">
.navbar-light .navbar-nav .nav-link:focus{
  color: #41acfa;
}
.alert {
  top: 70px;
  right: 70px;
}
</style>

<script>
import Alert from 'bootstrap/js/dist/alert';
Array.from(document.querySelectorAll('.alert')).forEach(
  alertNode => new Alert(alert)
);
// 問題一，為何這樣alert才會動？
export default {
  data () {
    return {
      login: false
    };
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      this.$http.defaults.headers.common.Authorization = token;
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/user/check`)
        .then(res => {
          console.log('已新增token');
          if (res.data.success) {
            this.login = true;
          } else {
            this.$router.push('/login');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    logout () {
      this.$http
        .post(`${process.env.VUE_APP_URL}/logout`)
        .then(res => {
          console.log('已登出');
          if (res.data.success) {
            this.$router.push('/');
          } else {
            console.log(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created () {
    this.checkLogin();
  }
};
</script>

<style lang="scss">
.navbar-brand h1 {
  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
.navbar-light .navbar-nav {
  z-index: 1010;
  .nav-link {
    font-weight: bolder;
    &.active {
      color: #41acfa;
    }
    &:hover {
      color: #41acfa;
    }
  }
}
</style>
