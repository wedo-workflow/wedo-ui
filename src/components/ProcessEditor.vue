<template lang="pug">
  div.process-editor
    p editor
    div#editor
</template>

<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'

export default {
  name: 'ProcessEditor',
  data () {
    return {
      bpmnViewer: null
    }
  },
  props: {
    msg: String
  },
  methods: {
    init () {
      this.bpmnViewer = new BpmnModeler({
        container: '#editor'
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang="scss">
</style>
