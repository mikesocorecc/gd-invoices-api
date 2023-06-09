import {
  mdiAccountCircle,
  mdiMonitor,
  mdiHelpCircle,
  mdiLock,
  mdiAccountKey,
  mdiSquareEditOutline,
  mdiTable,
  mdiMenuOpen,
  mdiTelevisionGuide,
  mdiBarcode,
  mdiPalette,
  mdiCardAccountDetailsOutline,
  mdiOpenInNew,
  mdiFormDropdown,
  mdiBallot,
  mdiViewQuilt,
} from "@mdi/js";

export default [
  {
    route: 'dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    route: 'permission.index',
    icon: mdiAccountKey,
    label: 'Permissions'
  },
//   {
//     to: "/tables-and-lists",
//     label: "Tables & Lists",
//     icon: mdiTable,
//     updateMark: "warning",
//   },
//   {
//     to: "/forms",
//     label: "Forms Base",
//     icon: mdiSquareEditOutline,
//   },
//   {
//     to: "/forms-advanced",
//     label: "Forms Advanced",
//     icon: mdiBallot,
//   },
//   {
//     to: "/ui",
//     label: "UI Base",
//     icon: mdiTelevisionGuide,
//   },
//   {
//     to: "/ui-advanced",
//     label: "UI Advanced",
//     icon: mdiViewQuilt,
//   },
//   {
//     to: "/styles",
//     label: "Styles",
//     icon: mdiPalette,
//   },
//   {
//     to: "/pricing",
//     label: "Pricing layout",
//     icon: mdiBarcode,
//   },

//   {
//     to: "/profile",
//     label: "Profile",
//     icon: mdiAccountCircle,
//   },
//   {
//     to: "/login",
//     label: "Login",
//     icon: mdiLock,
//   },
//   {
//     key: "submenus-1",
//     label: "Sub",
//     icon: mdiMenuOpen,
//     menuSecondary: [
//       {
//         to: "/profile",
//         label: "Sample RouterLink",
//         icon: mdiCardAccountDetailsOutline,
//       },
//       {
//         label: "External link",
//         href: "https://justboil.me",
//         icon: mdiOpenInNew,
//         target: "_blank",
//       },
//       {
//         label: "Dropdown",
//         icon: mdiFormDropdown,
//         menu: [
//           {
//             label: "Dropdown item One",
//           },
//           {
//             label: "Dropdown item Two",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     href: "https://justboil.me/tailwind-admin-templates/vue-dashboard/",
//     label: "About",
//     icon: mdiHelpCircle,
//   },
];
