<template>
  <div class="container">
    <div class="text-end mt-4">
      <button
        type="button"
        class="btn btn-primary"
        @click.prevent="openModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ getTime(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success fw-bolder">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click.prevent="openModal(false, item)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="openDelModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <pagination :pages="pages" @getProducts="getCoupons"></pagination>
    </div>
    <Loading :active="isLoading"></Loading>
  </div>
  <coupons-modal
    ref="modal"
    :coupon="tempCoupon"
    @getCoupons="getCoupons"
  ></coupons-modal>
  <del-coupon-modal
    ref="delmodal"
    :coupon="tempCoupon"
    @getCoupons="getCoupons"
  ></del-coupon-modal>
</template>

<script>
import couponsModal from '../../components/CouponsModal.vue';
import delCouponModal from '../../components/DelCouponModal.vue';
import pagination from '../../components/Pagination.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
const couponSample = {
  title: '超級特惠價格',
  is_enabled: 1,
  percent: 80,
  due_date: '',
  code: 'testCode'
};
export default {
  data () {
    return {
      coupons: {},
      tempCoupon: {},
      pages: {},
      isLoading: false
    };
  },
  components: {
    couponsModal,
    delCouponModal,
    pagination,
    Loading
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
        )
        .then(res => {
          if (res.data.success) {
            this.coupons = res.data.coupons;
            this.pages = res.data.pagination;
            this.isLoading = false;
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
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = { ...couponSample };
      } else {
        this.tempCoupon = item;
      }
      this.$refs.modal.openModal();
    },
    openDelModal (item) {
      this.tempCoupon = item;
      this.$refs.delmodal.openModal();
    }
  },
  created () {
    this.getCoupons();
  }
};
</script>
