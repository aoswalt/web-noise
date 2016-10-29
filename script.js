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
      console.err('number outside range', val)
    }

        const height = val * barMaxHeight
    ctx.fillRect(barWidth * index, maxHeight - height, barWidth, height)
  })
}

//NOTE(adam): get an array of 2d contexts from the nodelist of canvases
const ctx1dList = Array.from(document.querySelectorAll('.canvas1d')).map((c) => c.getContext('2d'))
ctx1dList.forEach(ctx => ctx.fillStyle = barColor)

ctx1dList.forEach((ctx, i) => {
  const nums = []
  for(let i = 0; i < barCount; ++i) { nums[i] = Math.random() }
  drawBars(ctx, nums)
})
