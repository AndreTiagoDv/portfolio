import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "hero" */ '../components/sections/SectionHero.vue'),
  },
  {
    path: '/about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/sections/SectionAboutMe.vue'),
  },
  {
    path: '/projects',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../components/sections/SectionProjects.vue'),
  },
  {
    path: '/skills',
    component: () =>
      import(/* webpackChunkName: "skills" */ '../components/sections/SectionSkills.vue'),
  },
  {
    path: '/contacts',
    component: () =>
      import(/* webpackChunkName: "contacts" */ '../components/sections/SectionContacts.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
