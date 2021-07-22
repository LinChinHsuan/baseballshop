<template>
<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled' : !pages.has_pre }">
        <a class="page-link px-2 h-100 d-flex align-items-center" href="#" aria-label="Previous" @click.prevent="$emit('getProducts', pages.current_page - 1)">
          <span class="material-icons">navigate_before</span>
        </a>
      </li>
      <li class="page-item" :class="{'active' : item === pages.current_page }" v-for="item in pages.total_pages" :key="item">
        <a class="page-link" href="#" @click.prevent="$emit('getProducts',item)">{{item}}</a>
      </li>
      <li class="page-item" :class="{'disabled' : !pages.has_next }">
        <a class="page-link px-2 h-100 d-flex align-items-center" href="#" aria-label="Next" @click.prevent="$emit('getProducts', pages.current_page + 1)">
          <span class="material-icons">navigate_next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.material-icons {
  font-size: 20px;
}
</style>

<script>
export default {
  props: ['pages']
}
</script>
