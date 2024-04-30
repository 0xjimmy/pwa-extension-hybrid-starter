if (typeof browser == 'undefined') {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome
}

browser.runtime.onInstalled.addListener(() => browser.tabs.create({ url: '/index.html' }))
browser.action.onClicked.addListener(() => browser.sidebarAction.toggle())
