const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator()

    expect(figureCalculator).toHaveProperty('calculateRetanglePerimeter')
    expect(figureCalculator).toHaveProperty('calculateRetangleArea')
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter')
    expect(figureCalculator).toHaveProperty('calculateTriangleArea')
    expect(figureCalculator.calculateRetanglePerimeter).toBeInstanceOf(Function)
    expect(figureCalculator.calculateRetangleArea).toBeInstanceOf(Function)
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function)
  })

  describe('A calculateRetanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRetanglePerimeter()).toThrowError()
      expect(() => figureCalculator.calculateRetanglePerimeter(1)).toThrowError()
      expect(() => figureCalculator.calculateRetanglePerimeter(1,2,3)).toThrowError()
    })

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRetanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRetanglePerimeter(null,'2')).toThrowError();
      expect(() => figureCalculator.calculateRetanglePerimeter([], {})).toThrowError();
    })

    it('should return correct value based on rectangle perimeter formula', () => {
      const length = 20
      const width = 10
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const figureCalculator = new FigureCalculator(MathBasic)

      const result = figureCalculator.calculateRetanglePerimeter(length, width)

      expect(result).toEqual(60)
      expect(spyAdd).toHaveBeenLastCalledWith(length, width)
      expect(spyMultiply).toHaveBeenCalledWith(2, 30)
    })
  })
  
  describe('A calculateRetangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRetangleArea()).toThrowError()
      expect(() => figureCalculator.calculateRetangleArea(1)).toThrowError()
      expect(() => figureCalculator.calculateRetangleArea(1,2,3)).toThrowError()
    })

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRetangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRetangleArea(null,'2')).toThrowError();
      expect(() => figureCalculator.calculateRetangleArea([], {})).toThrowError();
    })

    it('should return correct value based on rectangle Area formula', () => {
      const length = 20
      const width = 10
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const figureCalculator = new FigureCalculator(MathBasic)

      const result = figureCalculator.calculateRetangleArea(length, width)

      expect(result).toEqual(200)
      expect(spyMultiply).toHaveBeenCalledWith(20, 10)
    })
  })
  
  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(1,2)).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(1,2,3,4)).toThrowError()
    })

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, true)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(null,'2', [])).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter([], {}, 12)).toThrowError();
    })

    it('should return correct value based on triangle perimeter formula', () => {
      const sideA = 10
      const sideB = 20
      const sideC = 30
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const figureCalculator = new FigureCalculator(MathBasic)

      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, sideC)

      expect(result).toEqual(60)
      expect(spyAdd).toHaveBeenCalledWith(10, 50)
      expect(spyAdd).toHaveBeenCalledWith(20, 30)
    })
  })
  
  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea(1,2,3)).toThrowError()
    })

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(null,'2')).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea([], {})).toThrowError();
    })

    it('should return correct value based on triangle area formula', () => {
      const sideA = 10
      const height = 5
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const figureCalculator = new FigureCalculator(MathBasic)

      const result = figureCalculator.calculateTriangleArea(sideA, height)

      expect(result).toEqual(25)
      expect(spyMultiply).toHaveBeenCalledWith(0.5, 50)
    })
  })
})