<template>
  <v-app id="app">  
    <v-navigation-drawer class="grey darken-4" dark permanent app absolute width="60">
      <v-card height="48" width="60">
        <img  class="Vuetify_logo" align="center" justify="center"
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
    <v-app-bar app class="white" dense dark>
      <v-btn icon color="grey darken-1">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <AppSearch />
      <v-spacer></v-spacer>  
      <v-toolbar-items> 
        <v-row align="center" justify="center">
        <v-btn
          class="rectangle"
          text
          icon
          color="grey darken-1">
          <v-icon>insert_drive_file</v-icon>
        </v-btn>
        <v-avatar class="avatar">
        <img
          alt="John"
          src="https://cdn.vuetifyjs.com/images/john.jpg">
        </v-avatar>
        </v-row>
      </v-toolbar-items>   
    </v-app-bar>
    <v-main>
      <v-content>
        <v-container fluid>
          <AppTable />
          <AppDialog />
          <Authentication />
        </v-container>
      </v-content>
    </v-main>
  <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>
import AppTable from "@/components/AppTable"
import AppDialog from "@/components/AppDialog"
import AppSearch from "@/components/AppSearch"
import Authentication from "@/components/Authentication"

export default {
  name: 'App',
  components: {
  AppTable,
  AppDialog,
  AppSearch,
  Authentication,
  },
  data () {
    return {
        items: [
          { title: 'Заход', icon: 'mdi-view-dashboard' },
          { title: 'Акцепт', icon: 'mdi-view-dashboard' },
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
//$color: red;

//.avatar {
//margin-top: 8;
//width: 10;
//height: 10;
//margin-right: 24;
//}

.Vuetify_logo {
margin-top: 13px;
margin-left: 15px;
}
</style>