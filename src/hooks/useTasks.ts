import { useState, useEffect, useMemo } from 'react'
import { Task, FilterType } from '@/types/task'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, isLoaded])

  const sortedAndFilteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        const matchesFilter = 
          filter === 'all' || 
          (filter === 'pending' && !task.completed) || 
          (filter === 'completed' && task.completed)
        
        const matchesSearch = 
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesFilter && matchesSearch
      })
      .sort((a, b) => {
        if (a.priority !== b.priority) {
          return a.priority - b.priority
        }
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      })
  }, [tasks, filter, searchQuery])

  const addTask = (newTask: Omit<Task, 'id'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
    }
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ))
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleTaskStatus = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  return {
    tasks,
    sortedAndFilteredTasks,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    isLoaded,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
  }
}