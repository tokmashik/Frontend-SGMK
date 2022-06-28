<template>
  <div class="filters-line">
    <v-chip
        :key="item.field"
        v-for="item in items"
        class="mr-2"
        @click="$emit('click', item)"
    >
      {{ item.label }}
    </v-chip>
    <v-chip @click="$emit('clear')">Сбросить фильтры</v-chip>
  </div>
</template>

<script>
export default {
  name: 'FiltersLine2',
  data: () => ({
    items: [
      { label: 'Вес 44.6', value: '44.6', field: 'Вес' },
      { label: 'Все ТСы с кодом 34554', value: '34554', field: 'transport' }
    ]
  })
}
</script>