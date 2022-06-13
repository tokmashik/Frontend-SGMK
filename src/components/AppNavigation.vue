<template>
  <v-app>
    <v-navigation-drawer class="grey darken-4" dark permanent app absolute width="60">
      <v-card height="48" width="60">
        <img  class="img" align="center" justify="center"
          alt="Vuetify Logo"
          src="@/assets/mainlogo.png"
          width="29.27" height="23">
      </v-card>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> 
    </v-navigation-drawer>
  </v-app>
</template>