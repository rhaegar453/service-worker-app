/** @jsx window.preact.h */
const { h } = require('preact')

const Widget = () => {
  return (
    <div>
      <h1>Hello World this is the widget component</h1>
    </div>
  )
}

if (window !== undefined) {
  window.Widget = Widget
}

export default Widget
