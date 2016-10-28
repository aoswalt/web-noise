const ctx = document.getElementById('noise1d').getContext('2d')
ctx.fillStyle = 'green'

const drawBars = list => {
  const barCount = list.length
  const barWidth = ctx.canvas.width / barCount
  const maxHeight = ctx.canvas.height

  list.forEach((val, index, list) => {
    //NOTE(adam): ensure val 0 to 1
    if(val < 0 || val > 1) {
      console.err('number outside range', val)
    }

    const height = val * maxHeight
    ctx.fillRect(barWidth * index, maxHeight - height, barWidth, height)
  })
}

const nums = []
for(let i = 0; i < 10; ++i) { nums[i] = Math.random() }
drawBars(nums)

