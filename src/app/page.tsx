'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CustomLoader from '@/components/loader/CustomLoader'

const TaskManager = dynamic(() => import('@/app/components/Task/TaskManager'), { 
  ssr: false,
})

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <CustomLoader />
  }

  return (
    <main className="min-h-screen bg-background">
      <TaskManager />
    </main>
  )
}