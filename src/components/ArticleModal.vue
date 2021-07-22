<template>
  <div
    class="modal fade"
    id="articleModal"
    data-bs-backdrop="static"
    tabindex="-1"
    role="dialog"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="articleModalLabel">
            <span v-if="isNew">新增貼文</span>
            <span v-else>編輯貼文</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-2 mb-1"
                  v-for="(item, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      <span class="material-icons-outlined">close</span>
                    </button>
                  </div>
                </div>
                <div class="col-md-2 mb-1" v-if="true">
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click.prevent="addTag"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">文章內容</label>
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                >
                </ckeditor>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否公開
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
            @click.prevent="updateArticle"
          >
            確認
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
  top: 350px;
  right: auto;
}
</style>

<script>
import Modal from 'bootstrap/js/dist/modal';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  props: ['article'],
  data () {
    return {
      modal: {},
      tempArticle: {},
      create_at: '',
      isNew: true,
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'typing', 'bold', 'italic', '|', 'link']
      },
      alertShow: false,
      alertMsg: ''
    };
  },
  methods: {
    updateArticle () {
      this.tempArticle.create_at = Math.floor(
        Date.parse(this.create_at) / 1000
      );
      if (!this.isNew) {
        this.$http
          .put(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`,
            { data: { ...this.tempArticle } }
          )
          .then(res => {
            if (res.data.success) {
              this.hideModal();
              this.$emit('getArticles');
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
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`,
            { data: { ...this.tempArticle } }
          )
          .then(res => {
            if (res.data.success) {
              this.hideModal();
              this.$emit('getArticles');
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
    addTag () {
      this.tempArticle.tag.push('');
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
    article () {
      this.tempArticle = { ...this.article };
      if (this.article.id) {
        this.isNew = false;
        const dateAndTime = new Date(this.article.create_at * 1000)
          .toISOString()
          .split('T');
        this.create_at = dateAndTime[0];
        this.$http.get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.article.id}`)
          .then(res => {
            if (res.data.success) {
              this.tempArticle.content = res.data.article.content;
            } else {
              this.alertShow = true;
              this.alertMsg = res.data.message;
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.isNew = true;
        this.create_at = '';
      }
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal);
  }
};
</script>
