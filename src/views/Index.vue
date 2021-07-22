<template>
  <div class="container-fluid baner d-flex flex-column">
    <div class="row justify-content-end align-items-center flex-grow-1">
      <div
        class="col-7 col-sm-5 col-lg-4 col-xl-3 h-100 d-flex align-items-center"
      >
        <img class="img-fluid" src="../assets/images/slogan.png" alt="slogan" />
      </div>
      <div class="col-1 col-sm-2 col-xl-3"></div>
    </div>
    <div class="container">
      <ul
        class="row mb-0 py-3 px-0 px-md-2 px-lg-4 border border-4 border-primary bg-white"
      >
        <li
          class="col-6 col-lg-2 d-flex justify-content-center align-items-center mb-2 mb-lg-0"
        >
          <div class="img_1"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>棒球</h3>
            <p class="mb-0">baseball</p>
          </div>
        </li>
        <li
          class="col-6 col-lg d-flex justify-content-center align-items-center mb-2 mb-lg-0"
        >
          <div class="img_2"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>球棒</h3>
            <p class="mb-0">bat</p>
          </div>
        </li>
        <li
          class="col-6 col-lg d-flex justify-content-center align-items-center mb-0 mb-md-2 mb-lg-0"
        >
          <div class="img_3"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>手套</h3>
            <p class="mb-0">glove</p>
          </div>
        </li>
        <li
          class="col-6 col-lg d-flex justify-content-center align-items-center"
        >
          <div class="img_4"></div>
          <div
            class="text-center ms-3 ms-sm-4 d-flex flex-column justify-content-center"
          >
            <h3>護具</h3>
            <p class="mb-0">helmet</p>
          </div>
        </li>
        <li
          class="d-none d-lg-flex col-lg justify-content-center align-items-center"
        >
          <div class="img_5"></div>
          <div
            class="text-center ms-4 d-flex flex-column justify-content-center"
          >
            <h3>其他</h3>
            <p class="mb-0">other</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="container position-relative">
    <p class="h2 mt-5 ps-3 py-2 border-start border-primary border-4">
      店長推薦
    </p>
    <div class="position-relative">
      <div class="baner2 mt-4"></div>
      <div class="position-relative d-none d-md-block" style="height: 80px;">
        <div class="article border border-5 border-primary bg-white p-5">
          <p class="h2 mt-3 mt-md-0 mb-1">藍天捕手手套</p>
          <span>Catcher Glove</span>
          <table class="table table-borderless mt-4">
            <tbody>
              <tr>
                <th scope="row" class="ps-0" style="width: 80px;">材質</th>
                <td>真牛皮</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">顏色</th>
                <td>黑色</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">守位</th>
                <td>捕手用</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">特色</th>
                <td>
                  藍天野球特製青棒專用捕手手套，開合順暢、接捕確實，拯救您寶貴的出局數。
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center mt-4">
            <router-link
              class="btn btn-primary text-white"
              to="/products/-MecvD3PgpbyfNHtT24r"
            >
              查看更多
            </router-link>
          </div>
        </div>
      </div>
      <div class="d-block d-md-none">
        <div class="article p-3">
          <p class="h2 mt-3 mt-md-0 mb-1">藍天捕手手套</p>
          <span>Catcher Glove</span>
          <table class="table table-borderless mt-4">
            <tbody>
              <tr>
                <th scope="row" class="ps-0" style="width: 80px;">材質</th>
                <td>真牛皮</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">顏色</th>
                <td>黑色</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">守位</th>
                <td>捕手用</td>
              </tr>
              <tr>
                <th scope="row" class="ps-0">特色</th>
                <td>
                  藍天野球特製青棒專用捕手手套，開合順暢、接捕確實，拯救您寶貴的出局數。
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-primary text-white">
              查看更多
            </button>
          </div>
        </div>
      </div>
    </div>
    <p class="h2 mt-3 mt-lg-5 ps-3 py-2 border-start border-primary border-4">
      熱銷商品
    </p>
    <div class="row mt-4">
      <div class="col-sm-6 col-xl-3">
        <div class="card border-primary border-4">
          <div class="card-body p-4">
            <div class="productImg">
              <img src="" class="card-img-top" height="220" alt="..." />
            </div>
            <h5 class="card-title h4 mt-2 mb-3">經典硬式紅線棒球</h5>
            <p class="card-text mb-0">價格</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h6 my-0" style="text-decoration: line-through;">
                $60
              </div>
              <div class="h5 my-0 text-danger">$45</div>
            </div>
            <small class="d-flex justify-content-end text-danger"
              >OFF: $15 (25%)</small
            >
            <div class="mt-4 d-flex">
              <a href="#" class="btn btn-outline-primary">查看更多</a>
              <a href="#" class="btn btn-outline-primary ms-auto">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid coupon p-4 my-5">
    <div class="py-4 backdrop-blur">
      <p class="text-center h2 fw-bold mb-3 text-white">球季開打大優惠</p>
      <p class="text-center h3 fw-bold mb-0 text-white">
        慶祝中職開打，優惠券碼輸入 CPBL2021，全館商品享有 8 折優惠！
      </p>
      <div class="d-flex justify-content-center mt-3">
        <router-link class="btn btn-primary text-white" to="/products">
          前往搶購
        </router-link>
      </div>
    </div>
  </div>
  <div class="container pt-0 pt-md-5">
    <div class="row">
      <div class="col-md-4 d-flex flex-column justify-content-center">
        <div class="d-flex justify-content-center">
          <div
            class="d-none d-md-block bg-primary me-4"
            style="width: 70px;height: 70px;"
          ></div>
          <span class="h3 mb-0 align-self-end fw-bold">最新商品</span>
        </div>
        <p class="text-center fw-bold mt-2 mt-md-4 mb-0">
          「 享受打球單純的快樂。 」
        </p>
      </div>
      <div class="col-md-8 mt-3 mt-md-0">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title h4 mt-2 mb-3">經典硬式紅線棒球</h5>
                <p class="card-text mb-0">價格</p>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
                  <div class="h6 my-0" style="text-decoration: line-through;">
                    $60
                  </div>
                  <div class="h5 my-0 text-danger">$45</div>
                </div>
                <small class="d-flex justify-content-end text-danger"
                  >OFF: $15 (25%)</small
                >
                <div class="mt-4 d-flex">
                  <a href="#" class="btn btn-outline-primary">查看更多</a>
                  <a href="#" class="btn btn-outline-primary ms-auto"
                    >加入購物車</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block col-md-6 col-lg-4">
            <div class="card">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title h4 mt-2 mb-3">經典硬式紅線棒球</h5>
                <p class="card-text mb-0">價格</p>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
                  <div class="h6 my-0" style="text-decoration: line-through;">
                    $60
                  </div>
                  <div class="h5 my-0 text-danger">$45</div>
                </div>
                <small class="d-flex justify-content-end text-danger"
                  >OFF: $15 (25%)</small
                >
                <div class="mt-4 d-flex">
                  <a href="#" class="btn btn-outline-primary">查看更多</a>
                  <a href="#" class="btn btn-outline-primary ms-auto"
                    >加入購物車</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-block col-lg-4">
            <div class="card">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title h4 mt-2 mb-3">經典硬式紅線棒球</h5>
                <p class="card-text mb-0">價格</p>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
                  <div class="h6 my-0" style="text-decoration: line-through;">
                    $60
                  </div>
                  <div class="h5 my-0 text-danger">$45</div>
                </div>
                <small class="d-flex justify-content-end text-danger"
                  >OFF: $15 (25%)</small
                >
                <div class="mt-4 d-flex">
                  <a href="#" class="btn btn-outline-primary">查看更多</a>
                  <a href="#" class="btn btn-outline-primary ms-auto"
                    >加入購物車</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="h2 mt-5 mb-4 ps-3 py-2 border-start border-primary border-4">
      專欄文章
    </p>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body p-4">
            <h5 class="card-title">
              初學者必看！現代投手分工的秘密，掌握自己的適合的位置。
            </h5>
            <a href="#">繼續閱讀...</a>
          </div>
        </div>
      </div>
      <div class="d-none d-md-block col-md-6">
        <div class="card">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body p-4">
            <h5 class="card-title">
              五個正確守備的觀念！掌握自己的適合的位置。
            </h5>
            <a href="#">繼續閱讀...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<style lang="scss" scoped>
.baner {
  width: 100%;
  height: 450px;
  background-image: url(../assets/images/baner.jpg);
  background-size: cover;
  background-position: center;
}
li {
  transition: background-color 0.3s ease;
  @for $i from 1 through 7 {
    .img_#{$i} {
      width: 35px;
      height: 35px;
      background-image: url(../assets/images/productLogo_#{$i}.png);
      background-size: cover;
    }
  }
  &:hover {
    cursor: pointer;
    color: #41acfa;
    @for $i from 1 through 7 {
      .img_#{$i} {
        background-image: url(../assets/images/productLogo_#{$i}_blue.png);
      }
    }
  }
}
.baner2 {
  height: 400px;
  width: 65%;
  background-image: url(../assets/images/baner_2.jpg);
  background-size: cover;
  background-position: left center;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.article {
  width: 55%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid;
  @media (max-width: 992px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    top: 0;
    border: none;
  }
}
.coupon {
  background-image: url(../assets/images/baner_4.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.backdrop-blur {
  backdrop-filter: blur(10px);
}
</style>

<script>
import footerComponent from '../components/Footer.vue';
export default {
  components: {
    footerComponent
  }
};
</script>
