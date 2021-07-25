<template>
  <div class="container-fliud productBaner mb-4 mb-md-5"></div>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-4">
        <router-link class="breadcrumb-item" to="/">首頁</router-link>
        <router-link class="breadcrumb-item active" to="/products"
          >產品列表</router-link
        >
      </ol>
    </nav>
    <div class="row">
      <div class="d-none d-md-block col-md-9 col-lg-10 ms-auto">
        <div class="d-flex align-items-center mb-3">
          <p class="h5 mb-0">所有商品</p>
          <p class="mb-0 ms-auto">本頁共有 {{ filterProducts.length }} 件商品</p>
          <select
            class="form-select w-auto ms-3"
            v-model="filter"
            @change="usefilter"
          >
            <option selected value="">預設排序</option>
            <option value="lowToHigh">價格由低至高</option>
            <option value="HighTolow">價格由高至低</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col d-md-none mb-3">
        <div class="list-group list-group-flush border border-primary border-4">
          <div class="d-flex">
            <button
              type="button"
              class="list-group-item list-group-item-action py-3"
              :class="{ active: category === 'all' }"
              @click.prevent="category = 'all'"
            >
              全部商品
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action py-3"
              :class="{ active: category === '棒球' }"
              @click.prevent="category = '棒球'"
            >
              棒球專區
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action py-3"
              :class="{ active: category === '球棒' }"
              @click.prevent="category = '球棒'"
            >
              品質球棒
            </button>
          </div>
          <div class="d-flex">
            <button
              type="button"
              class="list-group-item list-group-item-action py-3"
              :class="{ active: category === '手套' }"
              @click.prevent="category = '手套'"
            >
              牛皮手套
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action py-3"
              :class="{ active: category === '護具' }"
              @click.prevent="category = '護具'"
            >
              專業護具
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action py-3"
              :class="{ active: category === '其他' }"
              @click.prevent="category = '其他'"
            >
              其他商品
            </button>
          </div>
        </div>
      </div>
      <div class="d-none d-md-block col-md-3 col-lg-2">
        <div class="list-group list-group-flush border border-primary border-4">
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === 'all' }"
            @click.prevent="category = 'all'"
          >
            全部商品
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '棒球' }"
            @click.prevent="category = '棒球'"
          >
            棒球專區
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '球棒' }"
            @click.prevent="category = '球棒'"
          >
            品質球棒
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '手套' }"
            @click.prevent="category = '手套'"
          >
            牛皮手套
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '護具' }"
            @click.prevent="category = '護具'"
          >
            專業護具
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '其他' }"
            @click.prevent="category = '其他'"
          >
            其他商品
          </button>
        </div>
        <select class="d-md-none form-select mt-3 mb-4">
          <option selected>預設排序</option>
          <option value="1">價格由低至高</option>
          <option value="2">價格由高至低</option>
        </select>
      </div>
      <div class="col-md-9 col-lg-10">
        <div class="row mb-4">
          <div
            class="col-md-6 col-lg-4"
            v-for="item in filterProducts"
            :key="item.id"
            @click.prevent="getProduct(item.id)"
          >
            <div class="card productCard mb-3">
              <div
                class="productImage position-relative overflow-hidden"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              >
                <span
                  class="material-icons position-absolute p-2"
                  :class="{ 'text-danger': isFavorite(item.id) }"
                  @click.stop="addFavorite(item)"
                  >favorite</span
                >
                <div
                  class="position-absolute addCart w-100 bg-primary py-3 text-white text-center"
                  @click.stop="addCart(item.id)"
                >
                  加到購物車
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title h4 mt-2 mb-3">{{ item.title }}</h5>
                <p class="card-text mb-0">價格</p>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
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
                      ((item.origin_price - item.price) / item.origin_price) *
                        100
                    )
                  }}%)</small
                >
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center" v-if="category === 'all'">
          <pagination :pages="pages" @getProducts="getProducts"></pagination>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid coupon p-4 mt-5">
    <div class="py-4 backdrop-blur">
      <p class="text-center h2 fw-bold mb-3 text-white">球季開打大優惠</p>
      <p class="text-center h3 fw-bold mb-0 text-white">
        慶祝中職開打，優惠券碼輸入 CPBL2021，全館商品享有 8 折優惠！
      </p>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="btn btn-primary text-white" to="/cart">
          使用優惠
        </router-link>
      </div>
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
  <footer-component></footer-component>
</template>

<style lang="scss" scoped>
.productBaner {
  height: 200px;
  background-image: url(../assets/images/baner_3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.list-group-flush .list-group-item {
  border: none;
  text-align: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: #41acfa;
    color: #ffffff;
  }
}
.productImage {
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  .material-icons {
    top: 8px;
    right: 8px;
    font-size: 28px;
    border-radius: 50%;
    color: #dee2e6;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    &:hover {
      color: #de3535;
    }
  }
  .addCart {
    bottom: -56px;
    transition: bottom 0.5s;
  }
  &:hover {
    .addCart {
      bottom: 0;
    }
  }
}
.productCard {
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
}
.alertMsg {
  top: 40px;
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
</style>

<script>
import pagination from '../components/Pagination.vue';
import footerComponent from '../components/Footer.vue';
export default {
  data () {
    return {
      products: {},
      filter: '',
      category: 'all',
      pages: {},
      favorite: [],
      favoriteIds: [],
      alertShow: false,
      alertMsg: ''
    };
  },
  components: {
    pagination,
    footerComponent
  },
  methods: {
    getProducts (page = 1) {
      if (this.category === 'all') {
        this.$http
          .get(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
          )
          .then(res => {
            if (res.data.success) {
              this.products = res.data.products;
              this.pages = res.data.pagination;
            } else {
              alert(res.data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$http
          .get(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`
          )
          .then(res => {
            if (res.data.success) {
              this.products = res.data.products;
            } else {
              alert(res.data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`);
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
          this.isLoading = false;
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
    addFavorite (item) {
      const id = item.id;
      if (
        !this.favorite.some(function (item) {
          return item.id === id;
        })
      ) {
        this.favorite.push(item);
        this.alertMsg = '已將商品新增至我的最愛！';
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
      } else {
        const item = this.favorite.find(function (item) {
          return item.id === id;
        });
        this.favorite.splice(this.favorite.indexOf(item), 1);
        console.log(this.favorite);
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
        this.alertMsg = '已將商品從我的最愛中刪除！';
      }
      this.getFavorite();
      this.alertShow = true;
      this.timeout = setTimeout(() => {
        this.alertShow = false;
      }, 3000);
    },
    getFavorite () {
      const vm = this;
      this.favoriteIds = [];
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
      this.favorite.forEach(function (item) {
        vm.favoriteIds.push(item.id);
      });
    },
    isFavorite (id) {
      return this.favoriteIds.some(function (item) {
        return item === id;
      });
    },
    usefilter () {
      if (this.filter === 'lowToHigh') {
        this.products.sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (this.filter === 'HighTolow') {
        this.products.sort(function (a, b) {
          return b.price - a.price;
        });
      } else {
        this.getProducts();
      }
      console.log(this.filter);
    }
  },
  computed: {
    filterProducts () {
      const vm = this;
      if (this.category === 'all') {
        return this.products;
      } else {
        const filterCategory = this.products.filter(function (item) {
          if (item.category === vm.category) {
            return item;
          }
        });
        return filterCategory;
      }
    }
  },
  watch: {
    category () {
      this.getProducts();
    }
  },
  created () {
    this.getFavorite();
    this.getProducts();
  }
};
</script>
