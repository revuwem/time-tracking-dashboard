import sleep from "../lib/sleep"

export const getData = async () =>{
  const res = await fetch("data/data.json")
  await sleep(1000, res)

  return res.json()
}
    
