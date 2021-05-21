<template>
	<div class="modal fade" id="modalDefault" data-backdrop="static" tabindex="-1" aria-labelledby="modalDefaultLabel" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-scrollable">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title"><slot name="modal-title"></slot></h5>
	        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
	      </div>
	      <div class="modal-body">
	      	<slot name="modal-content"></slot>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" @click="$emit('close')">Batal</button>
	        <slot name="modal-cta"></slot>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
export default {

  name: 'ModalDefault',

  data () {
		return {

		}
  }
}
</script>

<style lang="scss" scoped>
</style>