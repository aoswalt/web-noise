const barCount = 100
const barColor = 'green'


const freqList = Array.from(document.querySelectorAll('.freqVary'))
  .map((c) => c.getContext('2d'))
freqList.forEach((ctx) => ctx.fillStyle = barColor)

freqList.forEach((ctx, ctxIndex) => {
  i = ctxIndex + 1
  noiseFunc = Noise.makeCosNoise((x) => 0.1 * i)
  Draw.drawNoise(ctx, noiseFunc)
})


const ampList = Array.from(document.querySelectorAll('.ampVary'))
  .map((c) => c.getContext('2d'))
ampList.forEach((ctx) => ctx.fillStyle = barColor)

ampList.forEach((ctx, ctxIndex) => {
  i = ctxIndex + 1
  noiseFunc = Noise.makeCosNoise(undefined, (x) => 0.2 * i)
  Draw.drawNoise(ctx, noiseFunc)
})


const mixList = Array.from(document.querySelectorAll('.mixVary'))
  .map((c) => c.getContext('2d'))
mixList.forEach((ctx) => ctx.fillStyle = barColor)

mixList.forEach((ctx, ctxIndex) => {
  i = ctxIndex + 1
  n1 = Noise.makeCosNoise((x) => 0.0008 * i * x, (x) => 0.2 * i)
  n2 = Noise.makeSinNoise((x) => 0.003 * i * x, (x) => 0.4 * i)
  noiseFunc = (x) => n1(x) * n2(x)
  Draw.drawNoise(ctx, noiseFunc)
})


const whiteList = Array.from(document.querySelectorAll('.whiteNoise'))
  .map((c) => c.getContext('2d'))
whiteList.forEach((ctx) => ctx.fillStyle = barColor)

whiteList.forEach((ctx, ctxIndex) => {
  const rand = Random.makeRandom(ctxIndex)
  noiseFunc = (x) => Random.range(-1, 1, rand)
  Draw.drawNoise(ctx, noiseFunc)
})


const redList = Array.from(document.querySelectorAll('.redNoise'))
  .map((c) => c.getContext('2d'))
redList.forEach((ctx) => ctx.fillStyle = barColor)

redList.forEach((ctx, ctxIndex) => {
  const rand = Random.makeRandom(ctxIndex)
  noiseFunc = (x) => Random.range(-1, 1, rand)
  Draw.drawNoise(ctx, noiseFunc, Noise.smoother)
})


const violetList = Array.from(document.querySelectorAll('.violetNoise'))
  .map((c) => c.getContext('2d'))
violetList.forEach((ctx) => ctx.fillStyle = barColor)

violetList.forEach((ctx, ctxIndex) => {
  const rand = Random.makeRandom(ctxIndex)
  noiseFunc = (x) => Random.range(-1, 1, rand)
  Draw.drawNoise(ctx, noiseFunc, Noise.rougher)
})


const phaseList = Array.from(document.querySelectorAll('.phase'))
  .map((c) => c.getContext('2d'))
phaseList.forEach((ctx) => ctx.fillStyle = barColor)

phaseList.forEach((ctx, ctxIndex) => {
  Draw.drawNoise(ctx, Noise.makeNoise(1 / barCount, ctxIndex + 1))
})
