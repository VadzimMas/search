//width from design
const modelWidth = 1920
const phoneWidth = 320


export const adaptiveSize = (modelSize, phoneSize) => {
  let result = 0
  if (modelSize < 0) {
    const positiveModelSize = modelSize * (-1)
    result = `clamp(${modelSize}px,calc((((${-(positiveModelSize - phoneSize)}) * ((100vw - ${phoneWidth}px) * 100) / (${modelWidth - phoneWidth})) / 100) + ${phoneSize}px),${phoneSize}px)`
  } else {
    result = `clamp(${phoneSize}px,calc((((${modelSize - phoneSize}) * ((100vw - ${phoneWidth}px) * 100) / (${modelWidth - phoneWidth})) / 100) + ${phoneSize}px),${modelSize}px);`
    return result
  }
  return result
}


//fonts from macket
const xxlarge = adaptiveSize(105, 65)
const xlarge = adaptiveSize(90, 60)
const large = adaptiveSize(75, 50)
const medium = adaptiveSize(60, 45)
const small = adaptiveSize(45, 30)
const xsmall = adaptiveSize(30, 15)
const xxsmall = adaptiveSize(15, 10)
