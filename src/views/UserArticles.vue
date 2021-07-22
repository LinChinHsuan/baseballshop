<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <div class="card">
            <img :src="article.imageUrl" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <router-link
                :to="`/user/article/${article.id}`"
                v-if="article.isPublic"
                class="btn btn-outline-primary"
              >
                文章頁面
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <pagination :pages="pages"></pagination>
  </div>
</template>

<script>
import pagination from '../components/Pagination.vue';
export default {
  data () {
    return {
      articles: [],
      pages: {},
      isNew: false,
      tempArticle: {}
    };
  },
  components: {
    pagination
  },
  methods: {
    getArticles (page = 1) {
      this.$http.get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`)
        .then(res => {
          if (res.data.success) {
            this.articles = res.data.articles;
            this.pages = res.data.pagination;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created () {
    this.getArticles();
  }
};
</script>
