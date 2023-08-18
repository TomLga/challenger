import { createStore } from 'vuex'
import axios from 'axios'
const cUrl = "https://challenger-1y6n.onrender.com/"


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null
  },
  getters: {
  },
  mutations: {
    // mod state 
    setUsers(state, users) {
      state.users = users
    },
    setUses(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setToken(state, token) {
      state.spinner = spinner
    },
    setMsg(state, msg) {
      state.msg = msg
    }
  },

  actions: {
    async fetchUsers(context) {
      try {
      const  {data} = await axios.get(
          `${cUrl}users`)
        context.commit("setUsers", data.results)

      } catch(e){
        context.commit("setMsg", "error occ")
      }
    }
  }




})