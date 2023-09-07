const fs = require('fs')

const handleCopyFile = () => {
  fs.copyFileSync('build/widget.bundle.js', 'test/widget.bundle.js')
}

handleCopyFile()
