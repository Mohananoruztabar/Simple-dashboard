import React from 'react'


type Users = {
  id: number
  name: string
  email: string
  phone: string
  created_at: string
}

type DashbordTableProps = {
  data: Users[]
}


function DashbordTable({data}: DashbordTableProps) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Creat At</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.created_at}</td>
                            </tr>
                        )   
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default DashbordTable