<template>
  <div>
    <qrcode-stream @detect="onDetect"></qrcode-stream>
    <div v-if="result">Result: {{ result }}</div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  components: {
    QrcodeStream
  },
  data () {
    return {
      result: null
    }
  },
  methods: {
    onDetect (detectedCodes) {
      // get the first detected code that matches the QR code format
      const qrCode = detectedCodes.find(code => code.format === 'QR_CODE')
      if (qrCode) {
        // get the decoded text from the code
        this.result = qrCode.text
      }
    }
  }
}
</script>
  