import React from 'react'
import Folder from '@/components/Folder'

export default function Main() {
  const [data, setData] = React.useState([{
    rootFolder: 'Master User',
    id: 1,
    children: [
      {
        subRootFolder: 'User Role',
        id: 2,
        children: [
          {
            subRootFolder: 'Job User',
            id: 3,
            children: []
          },
          {
            subRootFolder: 'Job User',
            id: 4,
            children: [
              {
                subRootFolder: 'Title User',
                id: 5,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }])

  return (
    <div className="container mx-auto flex flex-col gap-4 h-screen items-center py-10">
      <div className="text-center">
        <h1 className="text-4xl">Unlimited Nested Data</h1>
        <h2>Kalbe Frontend Developer Coding Test</h2>
      </div>

      <div className="w-full">
        { data?.map((folder) => (
          <Folder
            key={folder.id}
            data={folder}
          />
        )) }
      </div>

      <div className="text-sm opacity-70">
        <b>Deo Aqli Rayyan</b> &copy; 2024. All Rights Reserverd
      </div>
    </div>
  )
}