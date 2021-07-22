<template>
  <div class="container">
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#productModal"
        @click.prevent="openModal(true)"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">{{ item.origin_price }}</td>
          <td class="text-end">{{ item.price }}</td>
          <td class="text-center fw-bolder">
            <span :class="{ 'text-success': item.is_enabled }">{{
              item.is_enabled ? '啟用' : '未啟用'
            }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#productModal"
                @click.prevent="openModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#delProductModal"
                @click.prevent="openDelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center mt-5">
      <pagination :pages="pages" @getProducts="getProducts"></pagination>
    </div>
  </div>
  <product-modal ref="modal" :product="tempProduct" @getProducts="getProducts"></product-modal>
  <del-modal
    ref="delmodal"
    :product="tempProduct"
    @getProducts="getProducts"
  ></del-modal>
  <Loading :active="isLoading"></Loading>
</template>

<script>
import productModal from '../../components/ProductModal.vue';
import delModal from '../../components/DelModal.vue';
import pagination from '../../components/Pagination.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
const productSample = {
  category: '分類',
  content: '',
  description: '',
  id: '',
  is_enabled: 1,
  origin_price: 0,
  price: 0,
  title: '產品標題',
  unit: '個',
  num: 0,
  imageUrl: '',
  imagesUrl: []
};
export default {
  data () {
    return {
      products: {},
      pages: {},
      tempProduct: {},
      isLoading: false
    };
  },
  components: {
    productModal,
    delModal,
    pagination,
    Loading
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
        )
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pages = res.data.pagination;
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
          this.$refs.modal.hideModal();
        })
        .catch(err => {
          console.log(err);
        });
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = { ...productSample };
      } else {
        this.tempProduct = item;
      }
      this.$refs.modal.openModal();
    },
    openDelModal (item) {
      this.tempProduct = item;
      this.$refs.delmodal.openModal();
    }
  },
  created () {
    this.getProducts();
  }
};
</script>
