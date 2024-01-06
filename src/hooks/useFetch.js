import { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../api/api'

const useFetch = (endpoint) => {
    const [data, setData] =useState()

    useEffect(()=>{
        apiCall()
    },[endpoint])

   const apiCall = async () =>{
    const res = await fetchDataFromApi(endpoint)
    setData(res)
   }
  return {data}
}

export default useFetch