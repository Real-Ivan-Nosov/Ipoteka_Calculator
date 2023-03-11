let data = {
  selectedProgram: 0.1,
  programs: {
    base: 0.1,
    it: 0.047,
    gov: 0.067,
    zero: 0.12
  }
}

const getData = () => {
  return { ...data }
}

const setData = (newData) => {
  data = {
    ...data,
    ...newData
  }
  console.log(data)
}

export { getData, setData }