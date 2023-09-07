;(function () {
  // Dynamic script loading for Preact
  const preactScript = document.createElement('script')
  preactScript.src = 'https://unpkg.com/preact@10.17.1/dist/preact.min.js'
  document.head.appendChild(preactScript)
  console.log('Loading the script')
  preactScript.onload = () => {
    // Your component script
    const componentScript = document.createElement('script')
    componentScript.src = './widget.bundle.js'
    document.head.appendChild(componentScript)

    componentScript.onload = function () {
      window.h = window.preact.h
      // Create a container element
      const container = document.createElement('div')
      container.id = 'chat-popup-container'
      document.body.appendChild(container)

      // Initialize your Preact component
      if (window.preact) {
        window.preact.render(window.preact.h(window.Widget.default), container)
      }
    }
  }
})()
