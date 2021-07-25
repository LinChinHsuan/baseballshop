<template>
  <div class="container mt-4">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carousel"
          ref="carousel"
          class="carousel slide"
          data-ride="carousel"
          v-if="product.imagesUrl"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" />
            </div>
            <div
              class="carousel-item"
              v-for="(item, index) in product.imagesUrl"
              :key="index"
            >
              <img :src="item" class="d-block w-100" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <img :src="product.imageUrl" class="w-100" v-else />
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/products"
                >產品列表</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mt-2 mb-3">{{ product.title }}</h2>
        <p class="mb-0">價格</p>
        <div class="d-flex justify-content-between align-items-baseline">
          <div
            class="h6 my-0 text-muted"
            style="text-decoration: line-through;"
          >
            ${{ product.origin_price }}
          </div>
          <div class="h4 my-0 text-danger">${{ product.price }}</div>
        </div>
        <small class="d-flex justify-content-end text-danger"
          >OFF: ${{ product.origin_price - product.price }} ({{
            Math.floor(
              ((product.origin_price - product.price) / product.origin_price) *
                100
            )
          }}%)</small
        >
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div
                class="input-group-prepend px-2 d-flex align-items-center"
                @click="adjustQty(-1)"
              >
                <span class="material-icons text-primary">remove</span>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model="qty"
              />
              <div
                class="input-group-append px-2 d-flex align-items-center"
                @click="adjustQty(1)"
              >
                <span class="material-icons text-primary">add</span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button
              class="btn btn-primary w-100"
              @click.prevent="addCart(product.id)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <p class="mt-5 h3">{{product.description}}</p>
    <p class="mt-5 h4 lh-lg">{{product.content}}</p>
    <p class="h4 mt-5 mb-3">推薦商品</p>
    <div class="mb-5">
      <swiper :slides-per-view="slidesPerNum" :space-between="30" autoplay>
        <swiper-slide v-for="item in products" :key="item.id">
          <div class="card">
            <div
              class="productImage"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <div class="card-body">
              <h5 class="card-title h4 mt-2 mb-3">{{ item.title }}</h5>
              <p class="card-text mb-0">價格</p>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h6 my-0" style="text-decoration: line-through;">
                  $ {{ item.origin_price }}
                </div>
                <div class="h5 my-0 text-danger">${{ item.price }}</div>
              </div>
              <small class="d-flex justify-content-end text-danger"
                >OFF: ${{ item.origin_price - item.price }} ({{
                  Math.floor(
                    ((item.origin_price - item.price) / item.origin_price) * 100
                  )
                }}%)</small
              >
              <div class="mt-4 d-flex">
                <a
                  class="btn btn-outline-primary"
                  @click.prevent="toProduct(item.id)"
                  >查看更多</a
                >
                <a
                  href="#"
                  class="btn btn-outline-primary ms-auto"
                  @click.prevent="addCart(item.id)"
                  >加入購物車</a
                >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
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
        <span class="mb-0">已將商品新增至{{ alertMsg }}！</span>
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
  <footer-component></footer-component>
</template>

<style lang="scss" scoped>
.input-group-prepend,
.input-group-append {
  cursor: pointer;
}
.alertMsg {
  top: 40px;
}
.productImage {
  height: 250px;
  background-size: cover;
  background-position: center;
}
</style>

<script>
import Carousel from 'bootstrap/js/dist/carousel';
import footerComponent from '../components/Footer.vue';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Autoplay]);
export default {
  data () {
    return {
      carousel: {},
      product: {},
      products: {},
      qty: 1,
      alertShow: false,
      alertMsg: '',
      fullWidth: 0
    };
  },
  methods: {
    getProduct () {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`
        )
        .then(res => {
          if (res.data.success) {
            this.product = res.data.product;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProducts (page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
        )
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toProduct (id) {
      this.$router.push(`/product/${id}`);
      this.timeout = setTimeout(() => {
        this.getProduct();
      }, 100);
    },
    adjustQty (num) {
      if (this.qty === 0 && num === -1) {
        this.qty = 0;
      } else {
        this.qty += num;
      }
    },
    addCart (id) {
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: {
              product_id: id,
              qty: this.qty
            }
          }
        )
        .then(res => {
          if (res.data.success) {
            this.alertMsg = '購物車';
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
  computed: {
    slidesPerNum () {
      if (this.fullWidth > 1399) {
        return 4;
      } else if (this.fullWidth > 991) {
        return 3;
      } else if (this.fullWidth > 767) {
        return 2;
      } else {
        return 1;
      }
    }
  },
  components: {
    footerComponent,
    Swiper,
    SwiperSlide
  },
  created () {
    this.fullWidth = window.innerWidth;
    this.getProduct();
    this.getProducts();
    this.carousel = new Carousel(this.$refs.carousel);
  },
  mounted () {
    window.onresize = () => {
      this.fullWidth = window.innerWidth;
    };
  }
};
</script>
