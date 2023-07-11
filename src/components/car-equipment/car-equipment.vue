<template>
  <ul class="user-profile__equipment-itemlist">
    <li
      class="user-profile__equi-item"
      v-for="item in equipmentItems"
      :key="item.id"
    >
      {{ item.features.feature_name }}
    </li>
    <!--
    <li class="user-profile__equi-item">Lorems</li>
    <li class="user-profile__equi-item">Loremswdt4t</li>
    <li class="user-profile__equi-item">Loremswf</li>
    <li class="user-profile__equi-item">Loremswf</li>
    <li class="user-profile__equi-item">Lortehthtemswf</li>
    <li class="user-profile__equi-item">Loreeeeemswf</li>
    <li class="user-profile__equi-item">Loreeeeemswf</li>
    <li class="user-profile__equi-item">eeee</li>
    <li class="user-profile__equi-item">Loreeeewf</li>
    <li class="user-profile__equi-item">Loreewf</li>
    <li class="user-profile__equi-item">Loreewf</li>
    <li class="user-profile__equi-item">Loreeeewfewrrzwer</li>
    -->
  </ul>
</template>
<script>
export default {
  props: {
    equipmentItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.user-profile__equipment-itemlist {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-top: var(--s-pad);
  padding-bottom: calc(var(--s-pad) / 2);
  gap: calc(var(--s-pad) / 2);
  color: var(--clr-font-list);
  margin-bottom: calc(var(--margin-default) / 2);
}
.user-profile__equi-item {
  --font-size: calc(var(--s-font) - 0.1rem);
  background: var(--surface-hover);
  padding-inline: calc(var(--font-size) - 0.3rem);
  padding-block: calc(var(--font-size) - 0.6rem);
  border-radius: calc(var(--font-size) - 0.6rem);
  font-weight: 300;
  font-size: var(--font-size);
}
</style>
