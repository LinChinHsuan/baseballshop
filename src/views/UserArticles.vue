<template>
  <div class="container mt-5">
    <div class="row mb-5">
      <div class="d-block d-md-none mb-3">
        <div class="list-group list-group-flush border border-primary border-4 flex-row">
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === 'all' }"
            @click.prevent="category = 'all'"
          >
            全部文章
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '科普' }"
            @click.prevent="category = '科普'"
          >
            棒球科普
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '訓練' }"
            @click.prevent="category = '訓練'"
          >
            訓練技巧
          </button>
        </div>
      </div>
      <div class="col-md-9">
        <template v-for="article in filterArticles" :key="article.id">
          <div class="col mb-3" v-if="article.isPublic">
            <div class="card">
              <div
                class="articleImg"
                :style="{ backgroundImage: `url(${article.imageUrl})` }"
              ></div>
              <div class="card-body">
                <h5 class="card-title h4 fw-bold">{{ article.title }}</h5>
                <div v-html="article.description"></div>
              </div>
              <div class="text-end p-3">
                <router-link
                  :to="`/blog/${article.id}`"
                  v-if="article.isPublic"
                  class="btn btn-outline-primary"
                >
                  閱讀更多
                </router-link>
              </div>
            </div>
          </div>
        </template>
        <div class="d-flex justify-content-center">
          <pagination :pages="pages" @getProducts="getArticles"></pagination>
        </div>
      </div>
      <div class="d-none d-md-block col-md-3">
        <div class="list-group list-group-flush border border-primary border-4">
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === 'all' }"
            @click.prevent="category = 'all'"
          >
            全部文章
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '科普' }"
            @click.prevent="category = '科普'"
          >
            棒球科普
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action py-3"
            :class="{ active: category === '訓練' }"
            @click.prevent="category = '訓練'"
          >
            訓練技巧
          </button>
        </div>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<style lang="scss" scoped>
.articleImg {
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 5px 5px 0 0;
}
.card {
  border-radius: 5px;
}
.card-body {
  max-height: 500px;
  overflow: hidden;
}
.list-group-flush > .list-group-item {
  border: none;
  text-align: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: #41acfa;
    color: #ffffff;
  }
}
</style>

<script>
import pagination from '../components/Pagination.vue';
import footerComponent from '../components/Footer.vue';
export default {
  data () {
    return {
      articles: [],
      category: 'all',
      pages: {},
      isNew: false,
      tempArticle: {}
    };
  },
  components: {
    pagination,
    footerComponent
  },
  methods: {
    getArticles (page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
        )
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
  computed: {
    filterArticles () {
      const vm = this;
      if (this.category === 'all') {
        return this.articles;
      } else {
        const filterArticles = this.articles.filter(function (item) {
          if (
            item.tag.some(function (item) {
              return item === vm.category;
            })
          ) {
            return item;
          }
        });
        return filterArticles;
      }
    }
  },
  created () {
    this.getArticles();
  }
};
</script>
