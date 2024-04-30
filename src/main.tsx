import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
}

render(<App />, document.getElementById('app')!)
