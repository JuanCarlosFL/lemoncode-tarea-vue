<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-text-field @keyup="hideTitle" label=" Enter the company name" v-model="companySearch" type="text"
          class="rounded-0 shrink" outlined>
          <div v-if="error">Error: {{ error }}</div>
        </v-text-field>
      </v-col>
    </v-row>
    <div v-if="totalMembers > 0">
      <h3 :class="{ 'text-center showCompanyName': isShowCompanyName }" hidden>
        Members for company: {{ companyNameCapitalize }} - Total members:
        {{ totalMembers }}
      </h3>
      <div class="d-flex flex-wrap">
        <v-card class="mx-auto my-12" max-width="200" v-for="user in users" :key="user.id">
          <MemberItem :user="user" />
        </v-card>
      </div>
    </div>
    <h3 v-else class="text-center">Enter a valid company</h3>
  </v-container>
</template>

<script setup lang="ts">
import MemberItem from '@/components/MemberItem.vue'
import { watch, ref, computed, onErrorCaptured, type ComputedRef, onMounted } from "vue";
import { useDebounceFn } from '@vueuse/core'
import useMembersApi from "@/composables/members.api";
import { useCompanyStore } from "@/stores/company";
import { storeToRefs } from "pinia";

const { users, totalMembers, getMembers } = await useMembersApi();

const store = useCompanyStore();
const { company } = storeToRefs(store);

const companySearch = ref(company);
const isShowCompanyName = ref(false);
const error = ref('');

const debouncedFn = useDebounceFn(async () => {
  await getMembers(companySearch.value)
  isShowCompanyName.value = true
  company.value = companySearch.value
}, 1000, { maxWait: 4000 });

onErrorCaptured((errorCapture: Error): void => {
  error.value = errorCapture.message
});

const hideTitle = (): void => {
  isShowCompanyName.value = false;
  users.value = [];
};

const companyNameCapitalize: ComputedRef<string> = computed(() => {
  return companySearch.value.charAt(0).toUpperCase() + companySearch.value.substring(1);
});

watch(companySearch, async () => {
  debouncedFn()
});

onMounted(async () => {
  await getMembers(companySearch.value)
  isShowCompanyName.value = true
})
</script>

<style scoped>
.showCompanyName {
  display: block;
}
</style>
