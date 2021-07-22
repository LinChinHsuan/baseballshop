<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item">
          <td>{{ getTime(item.create_at) }}</td>
          <td><span v-if="item.user">{{item.user.email}}</span></td>
          <td>
            <ul class="list-unstyled mb-0">
              <li v-for="item in item.products" :key="item">
                {{ item.product.title }}
                數量： {{ item.qty }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" v-model="item.is_paid"/>
              <label class="form-check-label">
                <span v-if="item.is_paid" class="text-success fw-bolder">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click.prevent="openModal(item)">檢視</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="openDelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center mt-5">
      <pagination :pages="pages" @getProducts="getOrders"></pagination>
    </div>
  </div>
  <order-modal ref="modal" :order="tempOrder" @getOrders="getOrders"></order-modal>
  <del-modal ref="delmodal"
    :order="tempOrder"
    @getOrders="getOrders"></del-modal>
  <Loading :active="isLoading"></Loading>
</template>

<script>
import orderModal from '../../components/OrderModal.vue';
import delModal from '../../components/DelOrderModal.vue';
import pagination from '../../components/Pagination.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data () {
    return {
      orders: {},
      pages: {},
      tempOrder: {},
      isLoading: false
    };
  },
  components: {
    orderModal,
    delModal,
    pagination,
    Loading
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
        )
        .then(res => {
          if (res.data.success) {
            this.isLoading = false;
            this.orders = res.data.orders;
            this.pages = res.data.pagination;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTime (date) {
      const time = new Date(date * 1000);
      return time.toLocaleDateString();
    },
    openModal (item) {
      this.tempOrder = item;
      this.$refs.modal.openModal();
    },
    openDelModal (item) {
      this.tempOrder = item;
      this.$refs.delmodal.openModal();
    }
  },
  created () {
    this.getOrders();
  }
};
</script>
