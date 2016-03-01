import test from 'ava'
import boobsGenerator from './index.es5'

test((t) => {
  const boobs = boobsGenerator()
  t.true(Array.isArray(boobs))
})
