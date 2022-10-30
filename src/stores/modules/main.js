import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore = defineStore("main", {
  state: () => ({
    token: "",
    //给初始化值
    startDate: startDate,
    endDate: endDate
  }),
})

export default useMainStore
