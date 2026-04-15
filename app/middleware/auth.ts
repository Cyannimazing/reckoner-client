export default defineNuxtRouteMiddleware((to, from) => {
  // Check token in local storage on client side
  if (import.meta.client) {
    const token = localStorage.getItem('_token')
    if (!token) {
      return navigateTo('/login')
    }
  }
})
