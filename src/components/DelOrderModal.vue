<template>
  <div
    id="delOrderModal"
    ref="delOrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delOrderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除產品</span>
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
          <strong class="text-danger">{{order.title}}</strong>
          商品(刪除後將無法恢復)。
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
            @click.prevent="delOrder"
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
  props: ['order'],
  data () {
    return {
      modal: {}
    }
  },
  methods: {
    openModal () {
      this.modal.show();
    },
    delOrder () {
      this.$http.delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/order/${this.order.id}`)
        .then(res => {
          if (res.data.success) {
            console.log('刪除成功');
            this.modal.hide();
            this.$emit('getOrders');
          } else {
            console.log(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.delOrderModal);
  }
}
</script>
