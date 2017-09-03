<template>
  <section class="item">
    <header
      class="header"
      v-scroll-out="{
        height: 50,
        upOut: headerUpOut,
        upIn: headerUpIn,
        bottomOut: headerBottomOut,
        bottomIn: headerBottomIn
      }"
    >
      <h2 :class="{'title':true, 'title-fixed':headerFixed}">第{{index}}个 Header</h2>
    </header>
    <div class="content">内容</div>
    <footer
      class="footer"
      v-scroll-out="{
        height: 40,
        upOut: footerUpOut,
        upIn: footerUpIn,
        bottomOut: footerBottomOut,
        bottomIn: footerBottomIn
      }"
    >
      <h3 :class="{'operation':true, 'operation-fixed':footerFixed}">第{{index}}个 Footer</h3>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'item',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      inPage: false,
      headerFixed: false,
      footerFixed: false
    }
  },
  methods: {
    headerUpOut () {
      if (this.inPage) {
        this.headerFixed = true
      }
    },
    headerUpIn () {
      this.headerFixed = false
      this.inPage = true
    },
    headerBottomOut () {
      this.inPage = false
      this.footerFixed = false
    },
    headerBottomIn () {
      this.inPage = true
      this.footerFixed = true
    },
    footerUpIn () {
      this.footerFixed = false
      this.headerFixed = true
      this.inPage = true
    },
    footerUpOut () {
      this.footerFixed = false
      this.headerFixed = false
      this.inPage = false
    },
    footerBottomOut () {
      if (this.inPage) {
        this.footerFixed = true
      }
    },
    footerBottomIn () {
      this.footerFixed = false
      this.inPage = true
    }
  }
}
</script>

<style lang="scss" scoped>
h2, h3 {
  padding: 0;
  margin: 0;
}
.item {
  .header {
    height: 50px;
    .title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: #888;
      top: -50px;
      transition: top .5s ease-out;
    }
    .title-fixed {
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  .footer {
    height: 40px;
    .operation {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #666;
      bottom: -40px;
      transition: bottom .5s ease-out;
    }
    .operation-fixed {
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
  .content {
    height: 300px;
    line-height: 300px;
    background: #e1e1e1;
  }
}
</style>
