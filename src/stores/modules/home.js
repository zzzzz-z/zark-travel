import { defineStore } from 'pinia'
import { GetHomehotSuggests, GetHomeCategories, GetHomeHoselist } from '@/service/modules/home'
const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houeseList:[],
    
  }),
  actions: {
    async fetchSuggestsData() {
      const res = await GetHomehotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await GetHomeCategories()
      this.categories = res.data
    },
    async fetchHoselistData() {
      const res = await GetHomeHoselist(this.currentPage)
      this.houeseList.push(...res.data)
      this.currentPage ++
    },
    

  }
})

export default useHomeStore