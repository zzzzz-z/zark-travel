import { defineStore } from 'pinia'
import { getCityAll } from '@/service/modules/city'
const useCityStore = defineStore('city', {
  state: () => ({
    Allcities: {},
    currentCity: {
      cityName: '上海'
    }
  }),
  actions: {
    async fetchAllcitiesData() {
      const res = await getCityAll()
      this.Allcities = res.data
    }
  }
})

export default useCityStore