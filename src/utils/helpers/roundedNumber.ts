const roundedNumber = (num: number) => {
  const strNum = `${num}`
  const firstNum = strNum[0]
  let result = firstNum;
  for (let i = 1; i < strNum.length; i++) {
    result += "0"
  }
  return result + "+"
}

export default roundedNumber