var Random = ((random) => {
  //NOTE(adam): taken from http://stackoverflow.com/questions/521295/javascript-random-seeds
  random.makeRandom = (seed_arg) => {
    //NOTE(adam): random seed if no argument
    let seed = (seed_arg !== undefined) ? seed_arg : Math.random()

    //NOTE(adam): 0 would always produce 0
    if(seed === 0) seed = 0.0001

    return () => {
      seed = Math.sin(seed) * 10000
      return seed - Math.floor(seed)
    }
  }

  //NOTE(adam): taken from
  //http://stackoverflow.com/questions/10134237/javascript-random-integer-between-two-numbers
  random.randomInt = (min, max, randomFunc) => {
    if(!randomFunc) randomFunc = random.makeRandom()
    return Math.floor(randomFunc() * (max - min + 1)) + min
  }

  random.range = (min, max, randomFunc) => {
    if(!randomFunc) randomFunc = random.makeRandom()
    return randomFunc() * (max - min) + min
  }


  return random
})(Random || {})
