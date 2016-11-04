var Draw = ((draw) => {
  const barColor = 'green'

  //NOTE(adam): normalize noise values to range from 0 to 1
  const normalize = (noise) => {
    //NOTE(adam): shift so min would be 0
    const min = Math.min(...noise)
    noise = noise.map((v) => v - min)

    //NOTE(adam): max is now the full range
    const max = Math.max(...noise)
    return noise.map((v) => v / max)
  }

  //NOTE(adam): draw the list of values as bars on the 2d context
  draw.drawBars = (ctx, raw_list) => {
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

  //NOTE(adam): draw bar graph of noise
  draw.drawNoise = (ctx, noiseFunc, finishFunc = (n) => n) => {
    const noise = []
    for(let i = 0; i < barCount; ++i) {
      noise[i] = noiseFunc(i)
    }
    draw.drawBars(ctx, finishFunc(noise))
  }

  draw.getCtxList = (className) => {
    const list = Array.from(document.querySelectorAll('.' + className))
      .map((c) => c.getContext('2d'))
    list.forEach((ctx) => ctx.fillStyle = barColor)
    return list
  }


  return draw
})(Draw || {})
