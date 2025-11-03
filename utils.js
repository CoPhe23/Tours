import axios from "axios";

const URL = 'https://raw.githubusercontent.com/mkatay/json-tours/refs/heads/main/tours.json'

export async function getTours(){
  console.log('Fetching tours...')
  try{
    const res = await axios.get(URL, { timeout: 9000 })
    console.log('Response', res)
    const data = res && res.data
    console.log('Data', data)
    if(!Array.isArray(data)){
      console.log('Data not array')
      throw new Error('Unexpected response')
    }
    return data
  }catch(err){
    console.log('Error', err)
    const msg = err?.response?.status ? ('HTTP ' + err.response.status) : (err && err.message || 'Unknown error')
    throw new Error('Failed to load tours: ' + msg)
  }
}

export const GetTours = (...args)=> getTours(...args)
