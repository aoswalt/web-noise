const barCount = 25
const barColor = 'green'

//NOTE(adam): draw the list of values as bars on the 2d context
const drawBars = (ctx, list) => {
  const barCount = list.length
  const barWidth = ctx.canvas.width / barCount
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

//NOTE(adam): taken from http://stackoverflow.com/questions/521295/javascript-random-seeds
const makeRandom = (seed_arg) => {
  let seed = (seed_arg !== undefined) ? seed_arg : Math.random()  //NOTE(adam): random seed if no argument

  if(seed === 0) seed = 0.0001  //NOTE(adam): 0 would always produce 0

  return () => {
    seed = Math.sin(seed) * 10000;
    return seed - Math.floor(seed)
  }
}

//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const ctx1dList = Array.from(document.querySelectorAll('.canvas1d')).map((c) => c.getContext('2d'))
ctx1dList.forEach(ctx => ctx.fillStyle = barColor)


ctx1dList.forEach((ctx, i) => {
  const nums = []
  const random = makeRandom(i)
  for(let i = 0; i < barCount; ++i) { nums[i] = random() }
  drawBars(ctx, nums)
})
