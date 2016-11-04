var Noise = ((noise) => {
  noise.makeNoise = (freq, seed) => {
    phase = Random.range(0, 2 * Math.PI, Random.makeRandom(seed))
    return (x) => Math.sin(2 * Math.PI * freq * x + phase)
  }

  //NOTE(adam): create cosine noise function with freq and amp functions
  noise.makeCosNoise = (freqFunc = (x) => 1, ampFunc = (x) => 1) =>
    (x) => Math.cos(ampFunc(x) + x * freqFunc(x))

  //NOTE(adam): create sine noise function with freq and amp functions
  noise.makeSinNoise = (freqFunc = (x) => 1, ampFunc = (x) => 1) =>
    (x) => Math.sin(ampFunc(x) + x * freqFunc(x))

  //NOTE(adam): average adjacent values for smoother noise output
  noise.adjacentMin = (noise) =>
    noise.map((e, i) => i === 0 ? noise[i] : Math.min(noise[i - 1], noise[i]))

  noise.smoother = (noise) =>
    noise.map((e, i) => i === 0 ? noise[i] : 0.5 * (noise[i - 1] + noise[i]))

  noise.rougher = (noise) =>
    noise.map((e, i) => i === 0 ? noise[i] : 0.5 * (noise[i - 1] - noise[i]))


  return noise
})(Noise || {})
