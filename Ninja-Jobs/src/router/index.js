import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/jobs',
		name: 'Jobs',
		component: Jobs
	},
	{
		path:'/jobs/:id',
		name: 'JobDetails',
		component: JobDetails,
		props: true
	},
	// redirect to /jobs
	{
		path:'/all-jobs',
		redirect: '/jobs'
	},
	// redirect to 404 page for all invalid path
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: NotFound
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
