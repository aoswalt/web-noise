var Noise = ((noise) => {
  //NOTE(adam): create cosine noise function with freq and amp functions
  noise.makeNoise = (freqFunc = (x) => 1, ampFunc = (x) => 1) =>
    (x) => Math.cos(ampFunc(x) + x * freqFunc(x))

  //NOTE(adam): create sine noise function with freq and amp functions
  noise.makeNoiseOffset = (freqFunc = (x) => 1, ampFunc = (x) => 1) =>
    (x) => Math.sin(ampFunc(x) + x * freqFunc(x))

  //NOTE(adam): average adjacent values for smoother noise output
  noise.adjacentMin = (noise) =>
    noise.map((e, i) => i === 0 ? noise[i] : Math.min(noise[i - 1], noise[i]))


  return noise
})(Noise || {})
