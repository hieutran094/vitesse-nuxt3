const startAt = Date.now()
let count = 0
let random = Math.random();

export default defineEventHandler(() => ({
  pageview: count++,
  startAt,
  random
}))
