const Hapi = require('@hapi/hapi')

const createServer = ({ mathBasic }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000
  })

  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params
        const value = mathBasic.add(Number(a), Number(b))
        return { value }
      }
    },
    {
      method: 'GET',
      path: '/subtract/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params
        const value = mathBasic.subtract(Number(a), Number(b))
        return { value }
      }
    },
    {
      method: 'GET',
      path: '/multiply/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params
        const value = mathBasic.multiply(Number(a), Number(b))
        return { value }
      }
    },
    {
      method: 'GET',
      path: '/divide/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params
        const value = mathBasic.divide(Number(a), Number(b))
        return { value }
      }
    },
    {
      method: 'GET',
      path: '/rectangle/perimeter/{length}/{width}',
      handler: (request) => {
        const { length, width } = request.params
        const value = mathBasic.multiply(2, mathBasic.add(Number(length), Number(width)))
        return { value }
      }
    },
    {
      method: 'GET',
      path: '/rectangle/area/{length}/{width}',
      handler: (request) => {
        const { length, width } = request.params
        const value = mathBasic.multiply(Number(length), Number(width))
        return { value }
      }
    },
    {
      method: 'GET',
      path: '/triangle/perimeter/{sideA}/{sideB}/{sideC}',
      handler: (request) => {
        const { sideA, sideB, sideC } = request.params
        const value = mathBasic.add(Number(sideA), mathBasic.add(Number(sideB), Number(sideC)))
        return { value }
      }
    },
    {
      method: 'GET',
      path: '/triangle/area/{sideA}/{height}',
      handler: (request) => {
        const { sideA, height } = request.params
        const value = mathBasic.multiply(0.5, mathBasic.multiply(Number(sideA), Number(height)))
        return { value }
      }
    }
  ])

  return server
}

module.exports = createServer