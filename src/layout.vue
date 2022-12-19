<template>
  <div  class="layout">
    <router-view id="main" class="layout-content"/>
  </div>
</template>

<script>


export default {
  name: "layout",
  components: {


  },
  data() {
    return {
      showPrice: true,
      dialogVisible: false,
      isCollapse: true,
    }
  },
  watch: {
    isShowConnect() {
      this.dialogVisible = this.$store.state.app.isShowConnect
    }
  },
  computed: {
    isShowConnect() {
      return this.$store.state.app.isShowConnect
    },
    classObj() {
      return {
      }
    }
  },
  created() {
    if (this.$route.path == '/cityNodeToken' || this.$route.path == '/home') {
      this.showPrice = false
    } else {
      this.showPrice = true
    }
  },
  methods: {
    chooseChain(chain){
      this.isShowSelect = false
      this.curChain = chain
    },
    onClose() {
      this.$store.commit("app/SET_SHOWCONNECT")
    },
    async registerWeb3() {

    },
    async getWallet() {
      if (typeof window.ethereum == 'undefined') {
        this.$message.error("down metamask")
      }
      window.ethereum.request({method: 'eth_requestAccounts'});

      this.registerWeb3()

    },
  }
}
</script>

<style lang="scss">

.layout {

}


</style>
