const productSamples = [
  {
    type: 'electronic',
    kind: 'laptop',
    brand: 'hp',
    model: 'pavilion-007',
  },
  {
    type: 'electronic',
    kind: 'laptop',
    brand: 'asus',
    model: 'rog-7',
  },
  {
    type: 'electronic',
    kind: 'smartphone',
    brand: 'huawei',
    model: 'x11',
  },
]

function createProduct(productSample) {
  return {
    id: Math.floor(Math.random() * 1000000),
    type: productSample.type,
    kind: productSample.kind,
    brand: productSample.brand,
    model: productSample.model,
  }
}

const availableProducts = [
  createProduct(productSamples[0]),
  createProduct(productSamples[0]),
  createProduct(productSamples[0]),
  createProduct(productSamples[1]),
  createProduct(productSamples[1]),
  createProduct(productSamples[1]),
  createProduct(productSamples[2]),
  createProduct(productSamples[2]),
  createProduct(productSamples[2]),
]

console.log(availableProducts)

// const hpPavilion007a = createProduct(productSamples[0])
// console.log(hpPavilion007a)

// const hpPavilion007b = createProduct(productSamples[0])
// console.log(hpPavilion007b)

// console.log(hpPavilion007a === hpPavilion007b)
