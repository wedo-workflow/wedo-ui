<template lang="pug">
  div.process-editor
    div#editor(ref="editor")
    panel.right-panel(:bpmn-modeler="bpmnModeler")
</template>

<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'
import Panel from './Panel'
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
  components: {
    Panel
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
.process-editor {
  display: flex;
}
#editor {
  width: calc(100vw - 300px);
  height: 100vh;
}
.right-panel {
  height: 100vh;
  width: 300px;
}
</style>
