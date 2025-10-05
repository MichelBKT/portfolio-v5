export default defineNuxtPlugin(() => {
  if (process.client) {
    // Dynamically import FlyonUI on client-side
    import('flyonui/flyonui.js')
      .then(() => {
        console.log('FlyonUI JavaScript loaded successfully')

        // Initialize FlyonUI components after a small delay to ensure DOM is ready
        setTimeout(() => {
          if (window.HSStaticMethods) {
            window.HSStaticMethods.autoInit()
          }
        }, 100)
      })
      .catch((error) => {
        console.error('Error loading FlyonUI:', error)
      })
  }
})