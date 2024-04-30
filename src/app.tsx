import { useSignal } from '@preact/signals'
import { Button } from '@/components/Button'
import { browser } from './lib/useBrowser'

function go() {
  browser.tabs.create({ url: '/index.html' })
}

export function App() {
  const localCounter = useSignal(1)

  return (
    <main class='w-screen min-h-screen h-full flex flex-col items-center justify-center gap-2 p-2'>
      <h2>Local Counter: {localCounter}</h2>
      <Button onClick={() => localCounter.value++}>Increment Local</Button>
      <Button variant='outline' onClick={go}>
        Open In Own Tab
      </Button>
    </main>
  )
}
