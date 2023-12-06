const createServer = require('./createServer')
const MathBasic = require('./MathBasic')

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      const a = 10
      const b = 20
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(30)
      expect(spyAdd).toBeCalledWith(a, b)
    })
  })
  
  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is substraction result of a and b correctly', async () => {
      const a = 12
      const b = 8
      const spySubtract = jest.spyOn(MathBasic, 'subtract')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(4)
      expect(spySubtract).toBeCalledWith(a, b)
    })
  })
  
  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiply result of a and b correctly', async () => {
      const a = 12
      const b = 8
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(96)
      expect(spyMultiply).toBeCalledWith(a, b)
    })
  })
  
  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
      const a = 64
      const b = 8
      const spyDivide = jest.spyOn(MathBasic, 'divide')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(8)
      expect(spyDivide).toBeCalledWith(a, b)
    })
  })
  
  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is the perimeter of rectangle', async () => {
      const length = 4
      const width = 8
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(24)
      expect(spyAdd).toBeCalledWith(length, width)
      expect(spyMultiply).toBeCalledWith(2, 12)
    })
  })
  
  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is the area of rectangle', async () => {
      const length = 4
      const width = 8
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(32)
      expect(spyMultiply).toBeCalledWith(length, width)
    })
  })
  
  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is the perimeter of triangle', async () => {
      const sideA = 4
      const sideB = 8
      const sideC = 2
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${sideC}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(14)
      expect(spyAdd).toBeCalledWith(sideA, MathBasic.add(sideB, sideC))
    })
  })
  
  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is the area of triangle', async () => {
      const sideA = 4
      const height = 10
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${sideA}/${height}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(20)
      expect(spyMultiply).toBeCalledWith(0.5, MathBasic.multiply(sideA, height))
      expect(spyMultiply).toBeCalledWith(sideA, height)
    })
  })
})