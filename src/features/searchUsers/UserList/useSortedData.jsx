const useSortedData = (data = [], order) => {
  const sortedData = [...data]
  sortedData.sort((a, b) => {
    const nameA = a.firstName
    const nameB = b.firstName
    if (nameA > nameB) {
      return order ? 1 : -1
    }
    if (nameA < nameB) {
      return order ? -1 : 1
    }
    return 0
  })
  return sortedData
}

export default useSortedData