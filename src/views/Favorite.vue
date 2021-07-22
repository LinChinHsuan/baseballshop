<template>
  <div class="container py-5">
    <div class="text-center h3 mt-4 mb-4">
      關注商品
    </div>
    <div class="row justify-content-center">
      <div class="col-8 mb-3 bg-light" v-for="item in favorite" :key="item.id">
        <div class="row">
          <div class="col-4">
            <img class="img-fluid" :src="item.imageUrl" :alt="item.title" />
          </div>
          <div class="col-5 d-flex flex-column justify-content-center">
            <h5 class="h4 mb-3">{{ item.title }}</h5>
            <p class="mb-0">價格</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div
                class="h6 my-0 text-muted"
                style="text-decoration: line-through;"
              >
                $ {{ item.origin_price }}
              </div>
              <div class="h4 my-0 text-danger">${{ item.price }}</div>
            </div>
            <small class="d-flex justify-content-end text-danger"
              >OFF: ${{ item.origin_price - item.price }} ({{
                Math.floor(
                  ((item.origin_price - item.price) / item.origin_price) * 100
                )
              }}%)</small
            >
          </div>
          <div class="col-1"></div>
          <div class="col-2 d-flex flex-column justify-content-between py-3">
            <span
              class="material-icons text-end"
              @click.prevent="removeFavorite(item)"
              >close</span
            >
            <a
              href="#"
              class="btn btn-outline-primary w-100"
              @click.prevent="addCart(item.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
      <div v-if="favorite.length === 0" class="text-center h3 mt-5">
        <p>尚無關注商品</p>
        <router-link class="btn btn-primary btn-lg rounded-0 text-white" to="/products">
          前往搶購
        </router-link>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
  <div
    class="w-100 d-flex justify-content-center position-fixed alertMsg"
    v-if="alertShow"
  >
    <div
      class="alert alert-success alert-dismissible fade show mb-0"
      role="alert"
    >
      <div class="d-flex align-items-center">
        <span class="material-icons text-white me-2">done</span>
        <span class="mb-0">已將商品新增至購物車！</span>
      </div>
      <button
        type="button"
        class="btn-close top-50 end-0 translate-middle-y"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="alertShow = false"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.material-icons {
  cursor: pointer;
}
.alertMsg {
  top: 20px;
}
</style>

<script>
import footerComponent from '../components/Footer.vue';
export default {
  data () {
    return {
      favorite: [],
      alertShow: false
    };
  },
  components: {
    footerComponent
  },
  methods: {
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    },
    removeFavorite (item) {
      this.favorite.splice(this.favorite.indexOf(item), 1);
      localStorage.setItem('favorite', JSON.stringify(this.favorite));
    },
    addCart (id) {
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: {
              product_id: id,
              qty: 1
            }
          }
        )
        .then(res => {
          if (res.data.success) {
            this.alertShow = true;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created () {
    this.getFavorite();
  }
};
</script>
