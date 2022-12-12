import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('company', () => {
  const company = ref('lemoncode');
  
  return { company }
});

