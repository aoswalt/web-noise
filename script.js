const barCount = 100
const barColor = 'green'


//NOTE(adam): average adjacent values for smoother noise output
const adjacentMin = (noise) =>
  noise.map((e, i) => i === 0 ? noise[i] : Math.min(noise[i - 1], noise[i]))

//NOTE(adam): create cosine noise function with freq and amp functions
const makeNoise = (freqFunc = (x) => 1, ampFunc = (x) => 1) =>
  (x) => Math.cos(x * freqFunc(x)) * ampFunc(x)


//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const ctx1dList = Array.from(document.querySelectorAll('.canvas1d'))
  .map((c) => c.getContext('2d'))
ctx1dList.forEach((ctx) => ctx.fillStyle = barColor)

ctx1dList.forEach((ctx, ctxIndex) => {
  const freq = (i) => 0.1 * (ctxIndex + 1)
  const noiseFunc = makeNoise(freq)

  const noise = []
  for(let i = 0; i < barCount; ++i) {
    noise[i] = noiseFunc(i)
  }
  Draw.drawBars(ctx, noise)
})
