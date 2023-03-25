const startAt = Date.now()
let count = 0
let random = Math.random();
let date = new Date();

export default defineEventHandler(() => ({
  pageview: count++,
  startAt,
  random,
  date
}))
