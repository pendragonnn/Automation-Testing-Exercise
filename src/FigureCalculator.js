class FigureCalculator{
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRetanglePerimeter(...args) {
    if(args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter')
    }

    const [length, width] = args

    if(typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number')
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width))
  }

  calculateRetangleArea(...args) {
    if(args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter')
    }

    const [length, width] = args

    if(typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number')
    }

    return this._mathBasic.multiply(length, width)
  }

  calculateTrianglePerimeter(...args) {
    if(args.length !== 3) {
      throw new Error('fungsi hanya menerima tiga parameter')
    }

    const [sideA, sideB, sideC] = args

    if(typeof sideA !== 'number' || typeof sideB !== 'number' || typeof sideC !== 'number') {
      throw new Error('fungsi hanya menerima parameter number')
    }

    return this._mathBasic.add(sideA, this._mathBasic.add(sideB, sideC))
  }
  calculateTriangleArea(...args) {
    if(args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter')
    }
    
    const [sideA, height] = args

    if(typeof sideA !== 'number' || typeof height !== 'number') {
      throw new Error('fungsi hanya menerima parameter number')
    }

    return this._mathBasic.multiply(0.5, this._mathBasic.multiply(sideA, height))
  }
}

module.exports = FigureCalculator