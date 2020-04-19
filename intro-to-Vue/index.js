Vue.component('product',{
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image">
      </div>

      <div class="product-info">
        <h1 > {{ title }} </h1>
        <p v-if="inStock > 10">In Stock</p>
        <!-- <p v-else-if="inStock<=10 && inVentory >0">Almost sold out</p> -->
        <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
        <p>{{ sale }}</p>
        <p>Shipping: {{ shipping }} </p>

        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>

        <div
          class="color-box" 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          :style="{ backgroundColor: variant.color}" 
          @mouseover="updateProduct(index)"
        >
        </div>
        <button 
          @click="addToCart" 
          :disabled="!inStock"
          :class="{disabledButton: !inStock}"
        >
          Add to Cart
        </button>

        <button 
          @click="removeFromCart" 
          :disabled="!inStock"
          :class="{disabledButton: !inStock}"
        >
          Remove from cart
        </button>

      </div>

      <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul v-else>
          <li v-for="review in reviews">
            <p>{{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
          </li>
        </ul>
      </div>

      <product-review @review-submitted="addReview"></product-review>

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
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart(){
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
      
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
    addReview(newReview){
      this.reviews.push(newReview)
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
      if (this.premium) {
        return "Free"
      }
        return 2.99
    }
  },

})

Vue.component('product-review',{
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s)</b>
        <ul>
          <li  v-for="error in errors" style="color: red">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review" ></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
      <p>Would you recommend this product?</p>
      <label>
        Yes
        <input type="radio" value="Yes" v-model="recommend" />
      </label>
          
      <label>
        No
        <input type="radio" value="No" v-model="recommend" />
      </label>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
      recommend: null
    }
  },
  methods: {
    onSubmit() {
      if(this.name && this.review && this.rating){
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend,
        }
        this.$emit('review-submitted', productReview)
  
        this.name = null
        this.review = null
        this.rating = null
        this.recommend = null
      }else {
        this.errors = []
        if(!this.name) this.errors.push("Name required.")
        if(!this.review) this.errors.push("Review required.")
        if(!this.rating) this.errors.push("Rating required.")
        if(!this.recommend) this.errors.push("Recommendation required.")
      }
      

    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeCartByProductId(id) {
      this.cart = this.cart.filter(a => a !== id)
    }
  },
})

