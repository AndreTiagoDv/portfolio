import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../components/sections/SectionHero.vue'),
  },
  {
    path: '/about',
    component: () => import('../components/sections/SectionAboutMe.vue'),
  },
  {
    path: '/projects',
    component: () => import('../components/sections/SectionProjects.vue'),
  },
  {
    path: '/skills',
    component: () => import('../components/sections/SectionSkills.vue'),
  },
  {
    path: '/contacts',
    component: () => import('../components/sections/SectionContacts.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
