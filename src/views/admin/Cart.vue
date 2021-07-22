<template>
  <div class="container mt-2 position-relative">
    <!-- 產品列表 -->
    <table class="table align-middle mb-4">
      <thead>
        <tr>
          <th>圖片</th>
          <th class="ms-2">商品名稱</th>
          <th>價格</th>
          <th>功能</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item">
          <td style="width: 200px">
            <div
              style="height: 100px; background-size: cover; background-position: center;"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>
            {{ item.title }}
          </td>
          <td>
            <div class="h5">{{ item.price }}元</div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click.prevent="addCart(item.id)"
            >
              加到購物車
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table align-middle">
      <thead>
        <tr>
          <th style="width: 70px"></th>
          <th>品名</th>
          <th style="width: 150px">數量 / 單位</th>
          <th class="text-end">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm rounded-0 p-1 d-flex align-items-center"
              @click.prevent="delCartProduct(item.id)"
            >
              <span class="material-icons">close</span>
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">
              已套用優惠券
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <input
                type="number"
                v-model.number="item.qty"
                @blur.prevent="updateCartProduct(item)"
              />
              / {{ item.product.unit }}
            </div>
          </td>
          <td class="text-end">
            <small v-if="!item.coupon">單價：</small>
            <small class="text-success" v-else>折扣價：</small>
            {{ item.final_total }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr v-if="cart.total === cart.final_total">
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
        </tr>
        <tr v-else>
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="d-flex justify-content-end">
      <div class="input-group w-25 me-2">
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
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="delAllCartProduct"
      >
        清空購物車
      </button>
    </div>
    <div class="my-5 row justify-content-center">
      <Form class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
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
          <error-message name="email" class="invalid-feedback"></error-message>
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

        <div class="mb-3">
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

        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
    <div
      class="d-flex justify-content-center position-fixed alertMsg"
      v-if="alertShow"
    >
      <div
        class="alert alert-success alert-dismissible fade show mb-0"
        role="alert"
      >
        <div class="d-flex align-items-center">
          <span class="material-icons me-2">done</span>
          <span class="mb-0">新增訂單成功！</span>
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
  </div>
</template>

<style lang="scss" scoped>
input {
  outline: none;
}
.alertMsg {
  top: 0;
  right: 0;
  transition: all 0.4s;
}
</style>

<script>
export default {
  data () {
    return {
      products: {},
      cart: {},
      coupon: '',
      user: {
        email: '',
        name: '',
        tel: '',
        address: ''
      },
      message: '',
      alertShow: false
    };
  },
  methods: {
    getProducts (page = 1) {
      this.$http
        .get(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
        )
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    addCart (id) {
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: {
              product_id: id,
              qty: 1
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          if (res.data.success) {
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
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
    updateCartProduct (item) {
      this.$http
        .put(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          {
            data: {
              product_id: item.id,
              qty: item.qty
            }
          }
        )
        .then(res => {
          if (res.data.success) {
            console.log(res.data.message);
            this.getCart();
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
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    delAllCartProduct () {
      this.$http
        .delete(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`
        )
        .then(res => {
          if (res.data.success) {
            console.log(res.data.message);
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
      this.$http
        .post(
          `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/coupon`,
          { data: { code: this.coupon } }
        )
        .then(res => {
          if (res.data.success) {
            this.getCart();
            this.coupon = '';
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
            this.user = {
              email: '',
              name: '',
              tel: '',
              address: ''
            };
            this.message = '';
            this.alertShow = true;
            this.getCart();
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
    this.getProducts();
    this.getCart();
  }
};
</script>
