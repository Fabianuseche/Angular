import './style.css'

import { setupCounter } from './counter.ts'
import './topics/01-basic-types.ts'
import './topics/02-objects-interface.ts'
import './topics/03-funtions.ts'
import './topics/04-homework-types.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript hola</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
