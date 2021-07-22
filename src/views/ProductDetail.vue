<template>
  <div class="container mt-4">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="product.imageUrl"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1916&amp;q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1916&amp;q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link class="text-muted" to="/products">產品</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
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
              <div class="input-group-prepend px-2 d-flex align-items-center">
                <span class="material-icons text-primary">remove</span>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append px-2 d-flex align-items-center">
                <span class="material-icons text-primary">add</span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button class="btn btn-primary w-100" @click.prevent="addCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <p class="h4 mt-4 mb-3">相關商品</p>
    <div class="row">
      <div class="col-4">
        <div class="card productCard mb-3">
          <div
            class="productImage position-relative overflow-hidden"
            style="background-image: url(./images/棒球素材/lesly-juarez-gNYQxI5ufII-unsplash.jpg);"
          >
            <span class="material-icons position-absolute p-2">favorite</span>
            <div
              class="position-absolute addCart w-100 bg-primary py-3 text-white text-center"
              @click.prevent="addCart(product.id)"
            >
              加到購物車
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title h4 mt-2 mb-3">{{ product.title }}</h5>
            <p class="card-text mb-0">價格</p>
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
                  ((product.origin_price - product.price) /
                    product.origin_price) *
                    100
                )
              }}%)</small
            >
          </div>
        </div>
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
  top:20px;
}
</style>

<script>
import footerComponent from '../components/Footer.vue';
export default {
  data () {
    return {
      product: {},
      alertShow: false,
      alertMsg: ''
    };
  },
  methods: {
    getProduct (page = 1) {
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
  components: {
    footerComponent
  },
  created () {
    this.getProduct();
  }
};
</script>
