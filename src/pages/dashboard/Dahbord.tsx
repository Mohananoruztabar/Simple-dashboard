import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from "./dashboard.module.css"
import DashbordTable from '../../component/DashbordTable'
import Paginate from '../../component/Paginate'
import Search from '../../component/Search'
import Loading from '../../component/Loading'


type Users = {
  id: number ,
  name : string ,
  email : string ,
  phone : string ,
  created_at : string
}


function Dahbord() {

  const [data , setData] = useState<Users[]>([])
  const [pageCount, setPageCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  
  const page = searchParams.get('page') || "1"
  const per_page = searchParams.get('per_page') || "8"
  const search = searchParams.get('name') || ""



  useEffect(()=>{
    setLoading(true)
    setError(null)
    
    axios.get('/fake_customers/api.php' ,
      {
        headers : { Authorization: 'Bearer Mohana_nrt'},
        params: { page, limit: per_page , search }
      }
    )
    .then((response)=>{
      const total = response.data.total
      const limit = response.data.limit

      setPageCount(Math.ceil(total / limit))
      setData(response.data.data)
      setLoading(false)
    })
    .catch((error)=>{
      setError(error.message || 'error')
      setLoading(false)
    })

  }, [page, per_page , search])

   const handlePageClick = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', newPage.toString())
    
    
    if (search) {
      newParams.set('name', search)
    }
    
    setSearchParams(newParams)
  }


  return (
    <div className={styled.dashbordWrapper}>
  {loading ? (
    <Loading />
  ) : (
    <>
      <Search />
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!error && <DashbordTable data={data} />}
      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </>
  )}
</div>

  )
}

export default Dahbord