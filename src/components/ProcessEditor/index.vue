<template lang="pug">
  div.process-editor
    div#editor(ref="editor")
</template>

<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'
import diagramXML from './resources/newDiagram.bpmn'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

export default {
  name: 'ProcessEditor',
  data () {
    return {
      bpmnModeler: null
    }
  },
  props: {
    msg: String
  },
  methods: {
    initBpmnModeler () {
      // 防止重复实例化
      if (this.bpmnModeler) {
        return
      }

      this.bpmnModeler = new BpmnModeler({
        container: this.$refs.editor
      })
      this.bpmnModeler.importXML(diagramXML)
    }
  },
  mounted () {
    this.initBpmnModeler()
  }
}
</script>

<style scoped lang="scss">
#editor {
  width: 100vw;
  height: 100vh;
}
</style>
