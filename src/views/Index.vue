<template>
  <div class="container-fluid baner d-flex flex-column">
    <div class="row justify-content-end align-items-center flex-grow-1">
      <div
        class="col-7 col-sm-5 col-lg-4 col-xl-3 h-100 d-flex align-items-center"
      >
        <img class="img-fluid" src="../assets/images/slogan.png" alt="slogan" />
      </div>
      <div class="col-1 col-sm-2 col-xl-3"></div>
    </div>
    <div class="container">
      <ul
        class="row mb-0 py-3 px-0 px-md-2 px-lg-4 border border-4 border-primary bg-white"
      >
        <li
          class="col-6 col-lg-2 d-flex justify-content-center align-items-center mb-2 mb-lg-0"
          @click="$router.push('/product/-MfCPTOq57IhKOYOm-ln')"
        >
          <div class="img_1"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>棒球</h3>
            <p class="mb-0">baseball</p>
          </div>
        </li>
        <li
          class="col-6 col-lg d-flex justify-content-center align-items-center mb-2 mb-lg-0"
          @click="$router.push('/product/-MfCNiGteDmfhq2qa1C0')"
        >
          <div class="img_2"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>球棒</h3>
            <p class="mb-0">bat</p>
          </div>
        </li>
        <li
          class="col-6 col-lg d-flex justify-content-center align-items-center mb-0 mb-md-2 mb-lg-0"
          @click="$router.push('/product/-MecvD3PgpbyfNHtT24r')"
        >
          <div class="img_3"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>手套</h3>
            <p class="mb-0">glove</p>
          </div>
        </li>
        <li
          class="col-6 col-lg d-flex justify-content-center align-items-center"
          @click="$router.push('/product/-MfCI46CFztXjXgsFZCe')"
        >
          <div class="img_4"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>護具</h3>
            <p class="mb-0">helmet</p>
          </div>
        </li>
        <li
          class="d-none d-lg-flex col-lg justify-content-center align-items-center"
          @click="$router.push('/product/-MepNqK7AQL-mB_pq4vQ')"
        >
          <div class="img_5"></div>
          <div
            class="text-center ms-4 d-flex flex-column justify-content-center"
          >
            <h3>其他</h3>
            <p class="mb-0">other</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="container position-relative">
    <p class="h2 mt-5 ps-3 py-2 border-start border-primary border-4">
      店長推薦
    </p>
    <div class="position-relative">
      <div class="baner2 mt-4"></div>
      <div class="position-relative d-none d-lg-block" style="height: 80px;">
        <div class="article border border-5 border-primary bg-white p-5">
          <p class="h2 mt-3 mt-md-0 mb-1">藍天捕手手套</p>
          <span>Catcher Glove</span>
          <table class="table table-borderless mt-4">
            <tbody>
              <tr>
                <th scope="row" class="ps-0" style="width: 80px;">材質</th>
                <td>真牛皮</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">顏色</th>
                <td>黑色</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">守位</th>
                <td>捕手用</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">特色</th>
                <td>
                  藍天野球特製青棒專用捕手手套，開合順暢、接捕確實，拯救您寶貴的出局數。
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center mt-4">
            <router-link
              class="btn btn-primary text-white"
              to="/product/-MecvD3PgpbyfNHtT24r"
            >
              查看更多
            </router-link>
          </div>
        </div>
      </div>
      <div class="d-block d-lg-none">
        <div class="article p-3">
          <p class="h2 mt-3 mt-md-0 mb-1">藍天捕手手套</p>
          <span>Catcher Glove</span>
          <table class="table table-borderless mt-4">
            <tbody>
              <tr>
                <th scope="row" class="ps-0" style="width: 80px;">材質</th>
                <td>真牛皮</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">顏色</th>
                <td>黑色</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">守位</th>
                <td>捕手用</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">特色</th>
                <td>
                  藍天野球特製青棒專用捕手手套，開合順暢、接捕確實，拯救您寶貴的出局數。
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center mt-4">
            <router-link
              class="btn btn-primary text-white"
              to="/product/-MecvD3PgpbyfNHtT24r"
            >
              查看更多
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <p class="h2 mt-3 mt-lg-5 ps-3 py-2 border-start border-primary border-4">
      熱銷商品
    </p>
    <div class="row mt-4">
      <div
        class="col-md-6 col-xxl-3 mb-3"
        v-for="(item, index) in hotProducts"
        :key="item.id"
      >
        <div class="card border-primary border-4" v-if="index < hotProductsNum">
          <div class="card-body p-4">
            <div
              class="productImage"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <h5 class="card-title h4 mt-4 mb-3">{{ item.title }}</h5>
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
              <router-link
                class="btn btn-outline-primary"
                :to="`/product/${item.id}`"
                >查看更多</router-link
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
      </div>
    </div>
  </div>
  <div class="container-fluid coupon p-4 mt-0 mt-md-5 mb-5">
    <div class="py-4 backdrop-blur">
      <p class="text-center h2 fw-bold mb-3 text-white">球季開打大優惠</p>
      <p class="text-center h3 fw-bold mb-0 text-white">
        慶祝中職開打，優惠券碼輸入 CPBL2021，全館商品享有 8 折優惠！
      </p>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="btn btn-primary text-white" to="/products">
          前往搶購
        </router-link>
      </div>
    </div>
  </div>
  <div class="container pt-0 pt-md-5 mb-5">
    <div class="row">
      <div class="col-md-4 col-lg-3 d-flex flex-column justify-content-center">
        <div class="d-flex justify-content-center">
          <div
            class="d-none d-md-block bg-primary me-4"
            style="width: 70px;height: 70px;"
          ></div>
          <span class="h3 mb-0 align-self-end fw-bold">最新商品</span>
        </div>
        <p class="text-center fw-bold mt-2 mt-md-4 mb-0">
          「 享受打球單純的快樂。 」
        </p>
      </div>
      <div class="col-md-8 col-lg-9 mt-3 mt-md-0">
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
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
                  <div class="h6 my-0" style="text-decoration: line-through;">
                    $ {{ item.origin_price }}
                  </div>
                  <div class="h5 my-0 text-danger">${{ item.price }}</div>
                </div>
                <small class="d-flex justify-content-end text-danger"
                  >OFF: ${{ item.origin_price - item.price }} ({{
                    Math.floor(
                      ((item.origin_price - item.price) / item.origin_price) *
                        100
                    )
                  }}%)</small
                >
                <div class="mt-4 d-flex">
                  <router-link
                    class="btn btn-outline-primary"
                    :to="`/product/${item.id}`"
                    >查看更多</router-link
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
    <p class="h2 mt-5 mb-4 ps-3 py-2 border-start border-primary border-4">
      專欄文章
    </p>
    <div class="row">
      <div class="col-md-6 mb-3" v-for="article in articles" :key="article.id">
        <div class="card">
          <div
            class="articleImg"
            :style="{ backgroundImage: `url(${article.imageUrl})` }"
          ></div>
          <div class="card-body p-4">
            <h5 class="card-title">{{ article.title }}</h5>
            <div class="text-end">
              <router-link
                :to="`/blog/${article.id}`"
                class="btn btn-outline-primary"
              >
                繼續閱讀
              </router-link>
            </div>
          </div>
        </div>
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
        <span class="mb-0">{{ alertMsg }}</span>
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
.baner {
  width: 100%;
  height: 450px;
  background-image: url(../assets/images/baner.jpg);
  background-size: cover;
  background-position: center;
}
li {
  transition: background-color 0.3s ease;
  @for $i from 1 through 7 {
    .img_#{$i} {
      width: 35px;
      height: 35px;
      background-image: url(../assets/images/productLogo_#{$i}.png);
      background-size: cover;
    }
  }
  &:hover {
    cursor: pointer;
    color: #41acfa;
    @for $i from 1 through 7 {
      .img_#{$i} {
        background-image: url(../assets/images/productLogo_#{$i}_blue.png);
      }
    }
  }
}
.baner2 {
  height: 400px;
  width: 65%;
  background-image: url(../assets/images/baner_2.jpg);
  background-size: cover;
  background-position: left center;
  @media (max-width: 992px) {
    width: 100%;
  }
}
.article {
  width: 55%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid;
  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    top: 0;
    border: none;
  }
  &Img {
    height: 300px;
    background-size: cover;
    background-position: center;
  }
}
.coupon {
  background-image: url(../assets/images/baner_4.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.backdrop-blur {
  backdrop-filter: blur(10px);
}
.productImage {
  height: 250px;
  background-size: cover;
  background-position: center;
}
.alertMsg {
  top: 20px;
  z-index: 1200;
}
</style>

<script>
import footerComponent from '../components/Footer.vue';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Autoplay]);
export default {
  data () {
    return {
      products: {},
      hotProductsIds: [
        '-MfCPTOq57IhKOYOm-ln',
        '-MfD1SLRO5MEjTwLWle_',
        '-MepNjf8o0ktMK67n8x_',
        '-MfCI46CFztXjXgsFZCe'
      ],
      fullWidth: 0,
      hotProducts: [],
      articles: {},
      alertShow: false,
      alertMsg: ''
    };
  },
  components: {
    footerComponent,
    Swiper,
    SwiperSlide
  },
  methods: {
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
    getProduct (id, index) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then(res => {
          if (res.data.success) {
            this.hotProducts[index] = res.data.product;
          }
        })
        .catch(err => {
          console.log(err);
        });
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
            this.alertMsg = '已將商品新增至購物車！';
            this.alertShow = true;
            this.timeout = setTimeout(() => {
              this.alertShow = false;
            }, 3000);
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getArticles (page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
        )
        .then(res => {
          if (res.data.success) {
            if (res.data.articles.length > 1) {
              this.articles = [res.data.articles[0], res.data.articles[1]];
            } else {
              this.articles = res.data.articles;
            }
          } else {
            console.log(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    hotProductsNum () {
      if (this.fullWidth > 1399) {
        return 4;
      } else if (this.fullWidth > 767) {
        return 2;
      } else {
        return 1;
      }
    },
    slidesPerNum () {
      if (this.fullWidth > 1399) {
        return 3;
      } else if (this.fullWidth > 768) {
        return 2;
      } else {
        return 1;
      }
    }
  },
  created () {
    this.fullWidth = window.innerWidth;
    this.getProducts();
    const vm = this;
    this.hotProductsIds.forEach(function (item, index) {
      vm.getProduct(item, index);
    });
    this.getArticles();
  },
  mounted () {
    window.onresize = () => {
      this.fullWidth = window.innerWidth;
    };
  }
};
</script>
