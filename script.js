const barCount = 100
const barColor = 'green'


//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const freqList = Array.from(document.querySelectorAll('.freqVary'))
  .map((c) => c.getContext('2d'))
freqList.forEach((ctx) => ctx.fillStyle = barColor)

freqList.forEach((ctx, ctxIndex) => {
  i = ctxIndex + 1
  noiseFunc = Noise.makeNoise((x) => 0.1 * i)
  Draw.drawNoise(ctx, noiseFunc)
})

//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const ampList = Array.from(document.querySelectorAll('.ampVary'))
  .map((c) => c.getContext('2d'))
ampList.forEach((ctx) => ctx.fillStyle = barColor)

ampList.forEach((ctx, ctxIndex) => {
  i = ctxIndex + 1
  noiseFunc = Noise.makeNoise(undefined, (x) => 0.2 * i)
  Draw.drawNoise(ctx, noiseFunc)
})

//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const mixList = Array.from(document.querySelectorAll('.mixVary'))
  .map((c) => c.getContext('2d'))
mixList.forEach((ctx) => ctx.fillStyle = barColor)

mixList.forEach((ctx, ctxIndex) => {
  i = ctxIndex + 1
  n1 = Noise.makeNoise((x) => 0.008 * i * x, (x) => 0.2 * i)
  n2 = Noise.makeNoiseOffset((x) => 0.03 * i * x, (x) => 0.4 * i)
  noiseFunc = (x) => n1(x) * n2(x)
  Draw.drawNoise(ctx, noiseFunc)
})
