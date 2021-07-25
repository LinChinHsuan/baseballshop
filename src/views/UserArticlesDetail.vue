<template>
  <div class="container mt-2">
    <div
      class="articleImg"
      :style="{ backgroundImage: `url(${article.imageUrl})` }"
    ></div>
    <nav aria-label="breadcrumb mt-3">
      <ol class="breadcrumb bg-white px-0 mb-0 py-3">
        <li class="breadcrumb-item">
          <router-link class="text-muted" to="/">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="text-muted" to="/blog">棒球專欄</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ article.title }}
        </li>
      </ol>
    </nav>
    <h2 class="mt-4 fw-bold">{{ article.title }}</h2>
    <span
      class="badge bg-primary me-2 p-2"
      v-for="(item, index) in article.tag"
      :key="index"
      >{{ item }}</span
    >
    <p class="mt-4 mb-5 h5">作者: {{ article.author }}<span class="ms-4">—{{ getTime(article.create_at)}}</span></p>
    <div class="py-5 h5" v-html="article.content"></div>
    <div class="text-end mt-5 p-3">
      <router-link to="/" class="btn btn-outline-primary me-2">
        返回首頁
      </router-link>
      <router-link to="/blog" class="btn btn-outline-primary">
        返回專欄
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.articleImg {
  height: 400px;
  background-size: cover;
  background-position: center;
}
</style>

<script>
export default {
  data () {
    return {
      article: {}
    };
  },
  methods: {
    getArticles (page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/article/${this.$route.params.id}`
        )
        .then(res => {
          if (res.data.success) {
            this.article = res.data.article;
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
    }
  },
  created () {
    this.getArticles();
  }
};
</script>
