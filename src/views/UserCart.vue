<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="row mb-4">
          <div class="col">
            <div
              class="alert text-center"
              :class="{ 'alert-primary': step === 0 }"
            >
              <p class="h3 font-weight-bold">STEP 1</p>
              確認購物清單
            </div>
          </div>
          <div class="col">
            <div
              class="alert text-center"
              :class="{ 'alert-primary': step === 1 }"
            >
              <p class="h3 font-weight-bold">STEP 2</p>
              填寫訂單資料
            </div>
          </div>
          <div class="col">
            <div
              class="alert text-center"
              :class="{ 'alert-primary': step === 2 }"
            >
              <p class="h3 font-weight-bold">STEP 3</p>
              完成訂單！
            </div>
          </div>
        </div>
        <div v-if="step === 0">
          <div class="d-flex justify-content-between">
            <h2 class="mb-0">您的購物車</h2>
          </div>
          <div class="input-group mt-4">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
              v-model="coupon"
            />
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              @click.prevent="useCoupon"
            >
              套用優惠碼
            </button>
          </div>
          <div class="text-danger mt-2 mb-4">
            慶祝中職開打，優惠券碼輸入CPBL2021，全館商品享有 8 折優惠！
          </div>
          <div
            class="d-flex mb-4 bg-light"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <img
              v-if="item.product"
              :src="item.product.imageUrl"
              alt=""
              style="width: 120px; height: 120px; object-fit: cover;"
            />
            <div class="w-100 p-3 position-relative">
              <a
                href="#"
                class="position-absolute"
                style="top: 16px; right: 16px;"
                >
                <span class="material-icons" @click.prevent="delCartProduct(item.id)">close</span>
              </a>
              <p class="mb-0 fw-bold" v-if="item.product">
                {{ item.product.title }}
              </p>
              <p
                class="mb-3 text-muted"
                style="font-size: 14px;"
                v-if="item.product"
              >
                {{ item.product.description }}
              </p>
              <div
                class="d-flex justify-content-between align-items-center w-100"
              >
                <div class="input-group w-50 align-items-center">
                  <div
                    class="input-group-prepend pe-1 d-flex align-items-center"
                  >
                    <span class="material-icons text-primary">remove</span>
                  </div>
                  <input
                    type="text"
                    class="form-control border-0 text-center my-auto shadow-none bg-light px-0"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    :value="item.qty"
                  />
                  <div class="input-group-append ps-1">
                    <span class="material-icons text-primary">add</span>
                  </div>
                </div>
                <p class="mb-0 ms-auto">NT$ {{ item.final_total }}</p>
              </div>
            </div>
          </div>
          <table class="table text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 font-weight-normal">
                  小計
                </th>
                <td class="text-end border-0 px-0">NT$24,000</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">
                  運費
                </th>
                <td class="text-end border-0 px-0 pt-0">NT$500</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總計</p>
            <p class="mb-0 h4 fw-bold">NT$ {{ cart.final_total }}</p>
          </div>
          <div class="mt-5 d-flex">
            <router-link to="/products" class="btn btn-primary btn-lg rounded-0"
              >繼續購物</router-link
            >
            <button
              type="button"
              class="btn btn-lg rounded-0 btn-primary ms-auto"
              @click.prevent="step = 1"
            >
              結帳
            </button>
          </div>
        </div>
        <Form
          class="my-5 justify-content-center"
          v-else-if="step === 1"
          v-slot="{ errors }"
          @submit="onSubmit"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="user.email"
            ></Field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">收件人姓名</label>
            <Field
              id="username"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入收件人姓名"
              rules="required"
              v-model="user.name"
            ></Field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">收件人電話</label>
            <Field
              id="phone"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入收件人電話"
              :rules="isPhone"
              v-model="user.tel"
            ></Field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入收件人地址"
              rules="required"
              v-model="user.address"
            ></Field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-5">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="message"
            ></textarea>
          </div>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-lg rounded-0 btn-primary"
              @click.prevent="step = 0"
            >
              上一步
            </button>
            <button
              type="submit"
              class="btn btn-lg rounded-0 btn-danger ms-auto"
            >
              送出訂單
            </button>
          </div>
        </Form>
        <div v-else>
          <h5
            class="bg-primary py-3 text-white d-flex justify-content-center align-items-center"
          >
            <span class="material-icons">task_alt</span>
            <span>感謝您的訂購，以下是您本次購物交易詳細。</span>
          </h5>
          <table class="w-100 text-center mt-4 mb-5">
            <tbody>
              <tr>
                <th class="py-3">訂單編號</th>
                <th>{{ order.orderId }}</th>
              </tr>
              <tr>
                <td class="py-3">購買者姓名</td>
                <td>{{ user.name }}</td>
              </tr>
              <tr>
                <td class="py-3">購買者電話</td>
                <td>{{ user.tel }}</td>
              </tr>
              <tr>
                <td class="py-3">收件地址</td>
                <td>{{ user.address }}</td>
              </tr>
              <tr>
                <td class="py-3">應付金額</td>
                <td>{{ order.total }}</td>
              </tr>
              <tr>
                <td class="py-3">付款狀態</td>
                <td v-if="!isPay">
                  <span>尚未付款</span>
                  <button class="btn-danger btn ms-3" @click.prevent="payOrder">
                    確認付款
                  </button>
                </td>
                <td v-else>
                  <span class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex py-3">
            <router-link to="/" class="btn btn-primary btn-lg rounded-0"
              >回首頁</router-link
            >
            <router-link
              to="/products"
              class="btn btn-primary btn-lg rounded-0 ms-auto"
              >繼續購物</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-100 d-flex justify-content-center position-fixed alertMsg" v-if="alertShow">
    <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
      <div class="d-flex align-items-center">
        <span class="material-icons text-white me-2">done</span>
        <span class="mb-0">{{alertMsg}}</span>
      </div>
      <button type="button" class="btn-close top-50 end-0 translate-middle-y" data-bs-dismiss="alert" aria-label="Close" @click="alertShow = false"></button>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<style lang="scss" scoped>
.input-group-prepend,
.input-group-append {
  cursor: pointer;
}
.alertMsg {
  top:20px;
}
</style>

<script>
import footerComponent from '../components/Footer.vue';
export default {
  data () {
    return {
      step: 0,
      cart: {},
      coupon: '',
      user: {
        email: '',
        name: '',
        tel: '',
        address: ''
      },
      message: '',
      order: {},
      isPay: false,
      alertShow: false,
      alertMsg: ''
    };
  },
  components: {
    footerComponent
  },
  methods: {
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    delCartProduct (id) {
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then(res => {
          if (res.data.success) {
            console.log(res.data.message);
            this.alertMsg = '已刪除該商品！';
            this.alertShow = true;
            this.timeout = setTimeout(() => {
              this.alertShow = false;
            }, 3000);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    useCoupon () {
      console.log('使用優惠券', this.coupon);
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/coupon`,
          { data: { code: this.coupon } }
        )
        .then(res => {
          if (res.data.success) {
            this.alertMsg = '已成功使用優惠券！';
            this.alertShow = true;
            this.timeout = setTimeout(() => {
              this.alertShow = false;
            }, 3000);
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    onSubmit () {
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`,
          {
            data: { user: this.user, message: this.message }
          }
        )
        .then(res => {
          if (res.data.success) {
            this.message = '';
            this.order = res.data;
            this.step = 2;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    payOrder () {
      const id = this.order.orderId;
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/pay/${id}`
        )
        .then(res => {
          if (res.data.success) {
            this.isPay = true;
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
    this.getCart();
  }
};
</script>
