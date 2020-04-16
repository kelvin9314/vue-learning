const app = new Vue({
  el: '#app',
  data: {
    product: 'Socket',
    image: './assets/vmSocks-green.jpg',
    inVentory: 100,
    inStock: true,
    onSale: true,
    details: ["80% cotton","20% polyester", "Gender-neutral"],
    variants: [
      {
        id: 2234,
        color: "green",
        image: "./assets/vmSocks-green.jpg"
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/vmSocks-blue.png"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart +=1
    },
    updateProduct(newImage) {
      this.image = newImage
    }
  },
})
