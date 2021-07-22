<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click.prevent="openModal(true)">
        建立新的貼文
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ getTime(article.create_at) }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button"  @click.prevent="openModal(false, article)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" type="button">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <article-modal ref="modal" :article="tempArticle" @getArticles="getArticles"></article-modal>
  <Loading :active="isLoading"></Loading>
</template>

<script>
import articleModal from '../../components/ArticleModal.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
const ArticleSample = {
  title: '新增第一篇文章',
  description: '文章內容',
  image: '',
  tag: ['tag1'],
  create_at: '',
  author: 'alice',
  isPublic: false,
  content: '這是內容'
};
export default {
  data () {
    return {
      articles: {},
      pages: {},
      tempArticle: {},
      isLoading: false
    };
  },
  components: {
    articleModal,
    Loading
  },
  methods: {
    getArticles (page = 1) {
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`
        )
        .then(res => {
          if (res.data.success) {
            this.articles = res.data.articles;
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
        this.tempArticle = ArticleSample;
      } else {
        this.tempArticle = item;
      }
      this.$refs.modal.openModal();
    }
  },
  created () {
    this.getArticles();
  }
};
</script>
