<template lang="pug">
  div.panel
    .settings
      el-button(circle, type="primary", icon="el-icon-upload2", @click="showXML")
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {
    }
  },
  props: {
    bpmnModeler: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    async showXML () {
      const { xml } = await this.bpmnModeler.saveXML()
      console.log(xml)
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.panel {
  border-left: 1px solid #ececec;
  background: #f4f4f4;
  .settings {
    padding: 20px;
    border-bottom: 1px solid #ececec;
    background: #FFF;
  }
}
</style>
