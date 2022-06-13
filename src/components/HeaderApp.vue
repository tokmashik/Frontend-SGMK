<template>
  <v-app>
    <v-app-bar app color="white" dark>
    <v-card
    height="48"
    width="60"
    >
      <img
        alt="Vuetify Logo"
        src="@/assets/mainlogo.png"
        width="29.27"
        height="23"
      >
      </v-card>
      <v-spacer></v-spacer>
         
        <v-toolbar-items> 


          <v-avatar class="avatar">
            <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
             alt="John"

            >
          </v-avatar>
        </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>


<script>
  
</script>


<style scoped>
.avatar {
margin-top: 8;
width: 32;
height: 32;
margin-right: 24;
}

.mx-auto {
  margin: 0;
  padding: 0;
  margin: 0, 0, 0, 0;
}
</style>