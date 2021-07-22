<template>
  <div
    class="modal fade"
    id="couponModal"
    data-bs-backdrop="static"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click.prevent="hideModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              class="form-control mt-1"
              id="title"
              name="標題"
              type="text"
              placeholder="請輸入標題"
              v-model="tempCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              id="coupon_code"
              name="優惠碼"
              type="text"
              class="form-control mt-1"
              placeholder="請輸入優惠碼"
              v-model="tempCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              id="due_date"
              name="到期日"
              type="date"
              class="form-control mt-1"
              placeholder="到期日"
              v-model="due_date"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              id="price"
              name="折扣百分比"
              type="number"
              class="form-control mt-1"
              placeholder="折扣百分比"
              v-model.number="tempCoupon.percent"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
                id="is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click.prevent="hideModal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="updateCoupon"
          >
            {{ isNew ? '新增' : '更新' }}優惠券
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-100 d-flex justify-content-center position-fixed alertMsg"
    v-if="alertShow"
  >
    <div
      class="alert alert-danger alert-dismissible fade show mb-0"
      role="alert"
    >
      <div class="d-flex align-items-center">
        <span class="material-icons me-2">error_outline</span>
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

<style scoped>
.alertMsg {
  z-index: 1060;
}
.alert {
  top: 300px;
  right: auto;
}
</style>

<script>
import Modal from 'bootstrap/js/dist/modal';
export default {
  props: ['coupon'],
  data () {
    return {
      modal: {},
      tempCoupon: {},
      due_date: '',
      isNew: true,
      alertShow: false,
      alertMsg: ''
    };
  },
  methods: {
    updateCoupon () {
      this.tempCoupon.due_date = Math.floor(Date.parse(this.due_date) / 1000);
      if (!this.isNew) {
        this.$http
          .put(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`,
            { data: { ...this.tempCoupon } }
          )
          .then(res => {
            if (res.data.success) {
              this.hideModal();
              this.$emit('getCoupons');
            } else {
              this.alertShow = true;
              this.alertMsg = res.data.message[0];
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$http
          .post(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon`,
            { data: { ...this.tempCoupon } }
          )
          .then(res => {
            if (res.data.success) {
              this.hideModal();
              this.$emit('getCoupons');
            } else {
              this.alertShow = true;
              this.alertMsg = res.data.message[0];
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    openModal () {
      this.modal.show();
    },
    hideModal () {
      this.alertShow = false;
      this.modal.hide();
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = { ...this.coupon };
      if (this.coupon.id) {
        this.isNew = false;
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
          .toISOString()
          .split('T');
        this.due_date = dateAndTime[0];
      } else {
        this.isNew = true;
        this.due_date = '';
      }
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal);
  }
};
</script>
