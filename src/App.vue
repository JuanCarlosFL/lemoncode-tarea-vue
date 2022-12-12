<template>
  <v-app>
    <v-main class="d-flex flex-column" v-if="authorize">
      <Header />
      <div v-if="error" class="error">Error: {{ error }}</div>
      <v-container class="flex-grow-1">
        <Suspense v-if="!error">
          <template #default>
            <router-view />
          </template>
          <template #fallback>
            <div>Loading....</div>
          </template>
        </Suspense>
      </v-container>
      <Footer />
    </v-main>
    <Login v-else @login="login" />
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/views/Login.vue'
import { ref, onErrorCaptured } from 'vue';
import { useRouter } from 'vue-router';

const authorize = ref(false);
const error = ref('');

const router = useRouter();

const login = () => {
  authorize.value = true
  router.push('/member-list');
}

onErrorCaptured((errorCapture: Error): void => {
  error.value = errorCapture.message
});

</script>

<style scoped>
.error {
  margin-top: 50px;
  color: red;
  text-align: center;
}
</style>
