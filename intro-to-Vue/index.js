const app = new Vue({
  el: '#app',
  data: {
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
  },
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
    }
  },
})
