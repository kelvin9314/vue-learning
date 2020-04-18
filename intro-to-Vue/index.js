Vue.component('product',{
  props: {
    premium: {
      type: Boolean,
      required: true
    },
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image">
      </div>

      <div class="product-info">
        <h1 > {{ title }} </h1>
        <p v-if="inStock > 10">In Stock</p>
        <!-- <p v-else-if="inStock<=10 && inVentory >0">Almost sold out</p> -->
        <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
        <p>{{ sale }}</p>

        <p>User is premium: {{ premium }} </p>
        <p>Shipping: {{ shipping }} </p>

        <!-- <span v-if="onSale">On Sale!</span> -->
        <li v-for="detail in details">{{detail}}</li>
        <li 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          class="color-box" 
          :style="{ backgroundColor: variant.color}" 
          @mouseover="updateProduct(index)"
        >
        </li>
        <button 
          @click="addToCart" 
          :disabled="!inStock"
          :class="{disabledButton: !inStock}"
        >
          Add to Cart
        </button>

        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
  `,
  data(){
    return {
      brand: 'XYZ',
      product: 'Socket',
      // image: './assets/vmSocks-green.jpg',
      selectedVariant: 0,
      inVentory: 0,
      onSale: true,
      details: ["80% cotton","20% polyester", "Gender-neutral"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/vmSocks-green.jpg",
          quantity: 12
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/vmSocks-blue.png",
          quantity: 0
        }
      ],
      cart: 0
    }
  } ,
  methods: {
    addToCart() {
      this.cart +=1
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return `${this.brand}: ${this.product}`
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    sale() {
      return this.onSale ? `${this.brand} ${this.product} are on sale` : `${this.brand} ${this.product} are not on sale` 
    },
    shipping() {
      return (this.premium) ? "Free" : '$2.99'
    }
  },

})

const app = new Vue({
  el: '#app',
  date: {
    premium: true
  }
})
