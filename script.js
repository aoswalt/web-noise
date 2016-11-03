const barCount = 100
const barColor = 'green'


//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const ctx1dList = Array.from(document.querySelectorAll('.canvas1d'))
  .map((c) => c.getContext('2d'))
ctx1dList.forEach((ctx) => ctx.fillStyle = barColor)

ctx1dList.forEach((ctx, ctxIndex) => {
  n1 = Noise.makeNoise((x) => 0.2 * (ctxIndex + 1))
  n2 = Noise.makeNoise((x) => 0.025 * (ctxIndex + 1), (x) => 0.4 * (ctxIndex + 1))
  noiseFunc = (x) => n1(x) * n2(x)
  Draw.drawNoise(ctx, ctxIndex, noiseFunc)
})
