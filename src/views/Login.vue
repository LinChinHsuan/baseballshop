<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-5 pb-4 px-5">
        <div class="text-center">
          <img
            class="text-center img-fluid w-50"
            src="../assets/images/logo.png"
            alt="logo"
          />
        </div>
        <h1 class="h3 mt-5 mb-4 font-weight-normal text-center">
          請登入管理員帳號
        </h1>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
              v-model="username"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              v-model="password"
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-primary w-100 my-4 py-3" type="submit">
            <span class="h5 text-white">登入</span>
          </button>
        </form>
      </div>
    </div>
    <p
      class="pb-4 text-muted text-center position-absolute bottom-0 start-50 translate-middle-x"
    >
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login () {
      this.$http
        .post(`${process.env.VUE_APP_URL}/admin/signin`, {
          username: this.username,
          password: this.password
        })
        .then(res => {
          if (res.data.success) {
            const [token, expired] = [res.data.token, res.data.expired];
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/admin/products');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
