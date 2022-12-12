<template>
    <v-card elevation="5">
        <v-container fluid class="d-flex align-center justify-space-between">
            <div style="width: 50px">
                <v-img :src="logo" height="40" width="40"></v-img>
            </div>
            <h3>Lemoncode Tarea Vue</h3>
            <h3>Vue 3 y Vuetify</h3>
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";
</script>
