<script setup>
import { computed } from "vue";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
// import { useRouter } from "vue-router";
import { router } from "@inertiajs/vue3";
import menuAside from "@/menu.js";
import menuNavBar from "@/menuNavBar.js";
import { useMainStore } from "@/Stores/main.js";
import { useLayoutStore } from "@/Stores/layout.js";
import { useStyleStore } from "@/Stores/style.js";
import BaseIcon from "@/Components/BaseIcon.vue";
import FormControl from "@/Components/FormControl.vue";
import NavBar from "@/Components/NavBar.vue";
import AsideMenu from "@/Components/Premium/AsideMenu.vue";
import NavBarItemPlain from "@/Components/NavBarItemPlain.vue";
import FooterBar from "@/Components/FooterBar.vue";
import SnackBar from "@/Components/Premium/SnackBar.vue";

useMainStore().setUser({
  name: "John Doe",
  email: "john@example.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutAsidePadding = computed(() =>
  layoutStore.isAsideLgActive ? "lg:pl-22" : "xl:pl-22"
);

const styleStore = useStyleStore();

const layoutStore = useLayoutStore();

// const router = useRouter();

// router.beforeEach(() => {
//   layoutStore.isAsideMobileExpanded = false;
// });

router.on("navigate", () => {
  layoutStore.isAsideMobileExpanded = false;
});

const menuClick = (event, item) => {
    console.log('click ');
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    //
  }
};
</script>

<template>
  <div
    :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible': layoutStore.isAsideMobileExpanded,
    }"
  >
    <div
      :class="[
        layoutAsidePadding,
        { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
      ]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded },
        ]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="layoutStore.asideMobileToggle()"
        >
          <BaseIcon
            :path="
              layoutStore.isAsideMobileExpanded
                ? mdiBackburger
                : mdiForwardburger
            "
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="layoutStore.asideLgToggle()"
        >
          <BaseIcon
            :path="layoutStore.isAsideLgActive ? mdiBackburger : mdiMenu"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <FormControl
            placeholder="Search (ctrl+k)"
            ctrl-k-focus
            transparent
            borderless
          />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu :menu="menuAside" @menu-click="menuClick" />
      <slot />
      <FooterBar>
        <a
          href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
          target="_blank"
          class="text-blue-600 ml-1"
          >Buy Premium</a
        >
        version
      </FooterBar>
      <SnackBar />
    </div>
  </div>
</template>
