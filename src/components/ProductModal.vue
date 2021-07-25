<template>
  <div
    class="modal fade"
    id="productModal"
    data-bs-backdrop="static"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="true">新增產品</span>
            <span v-else>新增產品</span>
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
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempProduct.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">
                  或 上傳圖片
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  name="file-to-upload"
                  @change="uploadImg"
                />
              </div>
              <div class="mb-3">
                <label for="createImages" class="form-label">
                  多圖新增
                </label>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <div
                    class="mb-3"
                    v-for="(img, key) in tempProduct.imagesUrl"
                    :key="img"
                  >
                    <label for="images" class="form-label">圖片網址</label>
                    <input
                      type="text"
                      class="form-control mb-2"
                      id="images"
                      v-model="tempProduct.imagesUrl[key]"
                      placeholder="請輸入圖片連結"
                    />
                    <img class="img-fluid" :src="img" />
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-primary w-100"
                    @click.prevent="tempProduct.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                  <button
                    v-if="tempProduct.imagesUrl.length !== 0"
                    type="button"
                    class="btn btn-outline-danger w-100"
                    @click.prevent="tempProduct.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
                <button
                  v-else
                  type="button"
                  class="btn btn-outline-primary w-100"
                  @click.prevent="createImages"
                >
                  新增陣列圖片
                </button>
              </div>
              <img class="img-fluid" :src="tempProduct.imageUrl" />
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  name="標題"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    name="分類"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="unit" class="form-label">單位</label>
                  <input
                    id="unit"
                    name="單位"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    name="原價"
                    type="number"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    name="售價"
                    type="number"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempProduct.description"
                  placeholder="請輸入產品描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  v-model="tempProduct.content"
                  placeholder="請輸入產品說明內容"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
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
            @click.prevent="updateProduct"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
export default {
  props: ['product'],
  data () {
    return {
      modal: {},
      tempProduct: {},
      isNew: ''
    };
  },
  methods: {
    openModal () {
      this.modal.show();
    },
    hideModal () {
      this.modal.hide();
      this.$refs.fileInput.value = '';
    },
    uploadImg () {
      const formData = new FormData();
      formData.append('file-to-upload', this.$refs.fileInput.files[0]);
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/upload`,
          formData
        )
        .then(res => {
          console.log(res.data);
          if (res.data.success) {
            console.log('上傳圖片成功');
            this.tempProduct.imageUrl = res.data.imageUrl;
          } else {
            console.log(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    createImages () {
      this.tempProduct.imagesUrl = [''];
    },
    updateProduct () {
      if (!this.isNew) {
        this.$http
          .put(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`,
            { data: { ...this.tempProduct } }
          )
          .then(res => {
            if (res.data.success) {
              this.hideModal();
              this.$emit('getProducts');
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        const dateTime = Date.now();
        const timestamp = Math.floor(dateTime / 1000);
        this.tempProduct.id = timestamp;
        this.$http
          .post(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`,
            { data: { ...this.tempProduct } }
          )
          .then(res => {
            if (res.data.success) {
              this.hideModal();
              this.$emit('getProducts');
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  watch: {
    product () {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
      if (this.product.id) {
        this.isNew = false;
      } else {
        this.isNew = true;
      }
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal);
  }
};
</script>
