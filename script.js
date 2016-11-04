const barCount = 100

Draw.getCtxList('freqVary').forEach((ctx, ctxIndex) => {
  const i = ctxIndex + 1
  const noiseFunc = Noise.makeCosNoise((x) => 0.1 * i)
  Draw.drawNoise(ctx, noiseFunc)
})

Draw.getCtxList('ampVary').forEach((ctx, ctxIndex) => {
  const i = ctxIndex + 1
  const noiseFunc = Noise.makeCosNoise(undefined, (x) => 0.2 * i)
  Draw.drawNoise(ctx, noiseFunc)
})

Draw.getCtxList('mixVary').forEach((ctx, ctxIndex) => {
  const i = ctxIndex + 1
  const n1 = Noise.makeCosNoise((x) => 0.0008 * i * x, (x) => 0.2 * i)
  const n2 = Noise.makeSinNoise((x) => 0.003 * i * x, (x) => 0.4 * i)
  const noiseFunc = (x) => n1(x) * n2(x)
  Draw.drawNoise(ctx, noiseFunc)
})

Draw.getCtxList('whiteNoise').forEach((ctx, ctxIndex) => {
  const rand = Random.makeRandom(ctxIndex)
  const noiseFunc = (x) => Random.range(-1, 1, rand)
  Draw.drawNoise(ctx, noiseFunc)
})

Draw.getCtxList('redNoise').forEach((ctx, ctxIndex) => {
  const rand = Random.makeRandom(ctxIndex)
  const noiseFunc = (x) => Random.range(-1, 1, rand)
  Draw.drawNoise(ctx, noiseFunc, Noise.smoother)
})

Draw.getCtxList('violetNoise').forEach((ctx, ctxIndex) => {
  const rand = Random.makeRandom(ctxIndex)
  const noiseFunc = (x) => Random.range(-1, 1, rand)
  Draw.drawNoise(ctx, noiseFunc, Noise.rougher)
})

Draw.getCtxList('phase').forEach((ctx, ctxIndex) => {
  Draw.drawNoise(ctx, Noise.makeNoise(1 / barCount, ctxIndex + 1))
})

Draw.getCtxList('weightedSum').forEach((ctx, ctxIndex) => {
  const amplitudes = [1.0, 0.7, 0.5, 0.3, 0.2, 0.1]
  const frequencies = [1, 2, 4, 8, 16, 32]

  const noiseFuncs = Noise.makeNoiseSet(frequencies.map((f) => f / barCount, ctxIndex + 1))
  const weightedFunc = (x) => Noise.weightedSum(amplitudes, noiseFuncs.map((f) => f(x)))
  Draw.drawNoise(ctx, weightedFunc)
})
