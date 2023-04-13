function differenceSet(setA, setB){
    let difference = new Set(setA)
    setB.forEach(e=>{
      difference.delete(e)
    })
    return difference
  }
  
  let setA = new Set([1, 2, 3])
  let setB = new Set([1, 3, 5])
  
  console.log(differenceSet(setA,setB)) //{2}
  console.log(differenceSet(setB,setA)) //{5}