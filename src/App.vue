<template>
  <v-app id="app">  
    <v-navigation-drawer class="grey darken-4" dark permanent app absolute width="60">
      <v-card height="48" width="60">
        <img  class="SGMK_logo"
          alt="Vuetify Logo"
          src="@/assets/mainlogo.png"
          width="29.27" height="23">
      </v-card>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> 
    </v-navigation-drawer>
    <v-app-bar app class="white" dense dark>
      <v-btn icon color="grey darken-1">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <AppSearch />
      <v-spacer></v-spacer>  
      <v-toolbar-items> 
        <v-row>
        <v-btn
          class="rectangle"
          text
          icon
          color="grey darken-1">
          <v-icon>insert_drive_file</v-icon>
        </v-btn>
        <v-avatar >
        <img class="avatar"
          alt="John"
          src="https://cdn.vuetifyjs.com/images/john.jpg">
        </v-avatar>
        </v-row>
      </v-toolbar-items>   
    </v-app-bar>
    <v-main>
      <v-content>     
        <v-container fluid>
          <AppTable2 />
          <AppDialog />
          <Authentication />
          <AuthModal />
          
        </v-container>
      </v-content>
    </v-main>
  <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>
import AppTable2 from "@/components/AppTable2"
import AppDialog from "@/components/AppDialog"
import AppSearch from "@/components/AppSearch"
import Authentication from "@/components/Authentication"
import AuthModal from "@/components/AuthModal"


export default {
  name: 'App',
  components: {
  AppTable2,
  AppDialog,
  AppSearch,
  Authentication,
  AuthModal,
  },
  data () {
    return {
        items: [
          { title: 'Заход', icon: 'mdi-view-dashboard' },
          { title: 'Акцепт', icon: 'mdi-view-dashboard', link: '/akcept'},
          { title: 'Задачи', icon: 'mdi-view-dashboard' },
          { title: 'Уведомления', icon: 'mdi-view-dashboard' },
          { title: 'Документооборот', icon: 'mdi-view-dashboard' },
          { title: 'Техподдержка', icon: 'mdi-view-dashboard' },
          { title: 'Журнал действий', icon: 'mdi-view-dashboard' },
        ],
    }
  }
}
</script>

<style lang="scss">

.SGMK_logo {
margin-top: 13px;
margin-left: 15px;
}

.avatar {
height: 5px;
}

</style>