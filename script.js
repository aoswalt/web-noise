const barCount = 100
const barColor = 'green'

//NOTE(adam): draw the list of values as bars on the 2d context
const drawBars = (ctx, raw_list) => {
  const list = normalize(raw_list)
  const listBarCount = list.length
  const barWidth = ctx.canvas.width / listBarCount
  const maxHeight = ctx.canvas.height
  const barMaxHeight = maxHeight * .8

  list.forEach((val, index, list) => {
    //NOTE(adam): ensure val 0 to 1
    if(val < 0 || val > 1) {
      console.error('number outside range', val)
    }

    const height = val * barMaxHeight
    ctx.fillRect(barWidth * index, maxHeight - height, barWidth, height)
  })
}

//NOTE(adam): normalize noise values to range from 0 to 1
const normalize = (noise) => {
  //NOTE(adam): shift so min would be 0
  const min = Math.min(...noise)
  noise = noise.map((v) => v - min)

  //NOTE(adam): max is now the full range
  const max = Math.max(...noise)
  return noise.map((v) => v / max)
}


//NOTE(adam): taken from http://stackoverflow.com/questions/521295/javascript-random-seeds
const makeRandom = (seed_arg) => {
  let seed = (seed_arg !== undefined) ? seed_arg : Math.random()  //NOTE(adam): random seed if no argument

  if(seed === 0) seed = 0.0001  //NOTE(adam): 0 would always produce 0

  return () => {
    seed = Math.sin(seed) * 10000
    return seed - Math.floor(seed)
  }
}

//NOTE(adam): taken from http://stackoverflow.com/questions/10134237/javascript-random-integer-between-two-numbers
const randomInt = (min, max, randomFunc) => {
  if(!randomFunc) randomFunc = makeRandom()
  return Math.floor(randomFunc() * (max - min + 1)) + min
}

//NOTE(adam): average adjacent values for smoother noise output
const adjacentMin = (noise) => noise.map((e, i) => i === 0 ? noise[i] : Math.min(noise[i - 1], noise[i]))


//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const ctx1dList = Array.from(document.querySelectorAll('.canvas1d')).map((c) => c.getContext('2d'))
ctx1dList.forEach(ctx => ctx.fillStyle = barColor)


ctx1dList.forEach((ctx, ctxIndex) => {
  const freq = 0.1 * (ctxIndex + 1)
  const noise = []
  const random = makeRandom(ctxIndex)
  for(let i = 0; i < barCount; ++i) { noise[i] = Math.cos(i * freq) }
  drawBars(ctx, normalize(noise))
})
