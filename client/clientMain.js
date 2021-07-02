import GameClient from "./GameClient"

window.onload = () => {
  const gameClient = new GameClient()

  let tick = 0
  let previous = performance.now()
  const loop = () => {
    window.requestAnimationFrame(loop)
    const now = performance.now()
    const delta = (now - previous) / 1000
    previous = now
    tick++

    gameClient.update(delta, tick, now)
  }

  loop()
}
