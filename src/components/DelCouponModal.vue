<template>
  <div
    id="delCouponModal"
    ref="delCouponModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delCouponModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delCouponModalLabel" class="modal-title">
            <span>刪除優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{tempCoupon.title}}</strong>
          優惠券(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            @click.prevent="delCoupon"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
export default {
  props: ['coupon'],
  data () {
    return {
      modal: {},
      tempCoupon: {}
    }
  },
  methods: {
    openModal () {
      this.modal.show();
    },
    delCoupon () {
      this.$http.delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then(res => {
          if (res.data.success) {
            console.log('刪除成功');
            this.modal.hide();
            this.$emit('getCoupons');
          } else {
            console.log(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon;
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.delCouponModal);
  }
}
</script>
