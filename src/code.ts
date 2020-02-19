if (figma.command == 'start-playing') {
  figma.showUI(__html__, { width: 480, height: 330 })
}

if (figma.command == 'follow-me') {
  figma.showUI(__html__)
  figma.ui.postMessage('follow-me')
}

figma.ui.onmessage = async msg => {
  if (msg.type === 'close-ui') {
    figma.closePlugin()
  }
  if (msg.type === 'close-plugin') {
    figma.closePlugin()
  }
}
