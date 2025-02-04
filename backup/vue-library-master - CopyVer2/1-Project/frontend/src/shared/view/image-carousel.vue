<!---<template>
  <el-carousel
    :arrow="value && value.length > 1 ? 'hover' : 'never'"
    :indicator-position="value && value.length > 1 ? 'outside' : 'none'"
    class="text-center"
    trigger="click"
    v-if="value && value.length"
  >
    <el-carousel-item :key="index" v-for="(image, index) in value">
      <a :href="image.publicUrl" target="_blank">
        <img
          :alt="image.name"
          :src="image.publicUrl"
          style="height: 100%; object-fit: cover"
        >
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'app-image-carousel',

  props: {
    value: Array,
  },
};
</script>

<style>
</style>
-->

<template>
  <div>
    <!-- El Carousel Component -->
    <el-carousel
      :arrow="value && value.length > 1 ? 'hover' : 'never'"
      :indicator-position="value && value.length > 1 ? 'outside' : 'none'"
      class="text-center"
      trigger="click"
      v-if="value && value.length"
    >
      <el-carousel-item v-for="(image, index) in value" :key="index">
        <a @click.prevent="zoomImage(image)">
          <img
            :alt="image.name"
            :src="image.publicUrl"
            style="height: 100%; object-fit: cover"
          />
        </a>
      </el-carousel-item>
    </el-carousel>

    <!-- Zoom Modal -->
    <div v-if="isZoomedIn" class="zoom-modal" @click="closeZoom">
      <img 
        v-if="zoomedImage"
        :src="zoomedImage.publicUrl" 
        alt="Zoomed Image" 
        class="zoomed-image" 
        :style="zoomedImageStyle"
        @mousemove="updateZoomPosition"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-image-carousel',

  props: {
    value: Array,
  },

  data() {
    return {
      isZoomedIn: false,
      zoomedImage: null,
      zoomLevel: 1, // Initial zoom level
      zoomOrigin: { x: 50, y: 50 }, // Default to center of the image
    };
  },

  computed: {
    zoomedImageStyle() {
      return {
        transform: `scale(${this.zoomLevel})`,
        transformOrigin: `${this.zoomOrigin.x}% ${this.zoomOrigin.y}%`,
        transition: 'transform 0.2s ease-in-out', // Smooth transition
      };
    },
  },

  methods: {
    // Method to zoom in the image on click
    zoomImage(image) {
      this.zoomedImage = image;
      this.isZoomedIn = true;
    },

    // Update the zoom origin based on mouse position
    updateZoomPosition(event) {
      const { offsetX, offsetY, target } = event;
      const { width, height } = target;

      // Calculate percentage of mouse position within the image
      this.zoomOrigin.x = (offsetX / width) * 100;
      this.zoomOrigin.y = (offsetY / height) * 100;
    },

    // Handle zoom with the mouse scroll
    handleZoom(event) {
      if (event.deltaY < 0) {
        // Zoom in
        this.zoomLevel *= 1.1; // Increase the zoom level
      } else {
        // Zoom out
        this.zoomLevel *= 0.9; // Decrease the zoom level
      }
    },

    // Close the zoom modal and remove event listener
    closeZoom() {
      this.isZoomedIn = false;
      this.zoomedImage = null;
      this.zoomLevel = 1; // Reset zoom level to default
      this.zoomOrigin = { x: 50, y: 50 }; // Reset zoom origin to center

      // Remove the scroll event listener when zoom modal is closed
      window.removeEventListener('wheel', this.handleZoom);
    },
  },

  watch: {
    isZoomedIn(newVal) {
      if (newVal) {
        // Add scroll event listener for zooming in/out
        window.addEventListener('wheel', this.handleZoom);
      } else {
        // Remove scroll event listener when zoom modal is closed
        window.removeEventListener('wheel', this.handleZoom);
      }
    },
  },
};
</script>

<style scoped>
.zoom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.zoomed-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  cursor: pointer;
}
</style>



