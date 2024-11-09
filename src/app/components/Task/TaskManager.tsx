'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from "@/hooks/use-toast"
import { TaskForm } from './Form/TaskForm'
import { useTasks } from '@/hooks/useTasks'
import { Task } from '@/types/task'
import { TaskHeader } from './Header/TaskHeader'
import { TaskControls } from './Controls/TaskControls'
import { TaskList } from './List/TaskList'
import { TaskSidebar } from '../Sidebar/TaskSidebar'

export default function TaskManager() {
  const {
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
  } = useTasks()

  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [focusedTaskId, setFocusedTaskId] = useState<string | null>(null)
  const [isSelectingTask, setIsSelectingTask] = useState(false)
  const [mascotMessage, setMascotMessage] = useState("¡Hola! Estoy aquí para animarte.")
  const { toast } = useToast()

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        "¡Tú puedes lograrlo!",
        "Cada tarea completada es un paso hacia adelante.",
        "¡Sigue así, vas muy bien!",
        "Recuerda tomar descansos de vez en cuando.",
        "¡Estás haciendo un trabajo increíble!"
      ]
      setMascotMessage(messages[Math.floor(Math.random() * messages.length)])
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const handleOpenDialog = (task: Task | null = null) => {
    setEditingTask(task)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setEditingTask(null)
    setIsDialogOpen(false)
  }

  const handleSubmit = (taskData: Partial<Task>) => {
    if (editingTask) {
      updateTask({ ...editingTask, ...taskData })
    } else {
      addTask(taskData as Task)
    }
    
    handleCloseDialog()
  }

  const selectRandomTask = () => {
    setIsSelectingTask(true)
    setTimeout(() => {
      const incompleteTasks = tasks.filter(task => !task.completed)
      if (incompleteTasks.length > 0) {
        const randomTask = incompleteTasks[Math.floor(Math.random() * incompleteTasks.length)]
        setFocusedTaskId(randomTask.id)
        toast({
          title: "¡Tarea sorpresa seleccionada!",
          description: `Enfócate en: ${randomTask.title}`,
        })
      } else {
        toast({
          title: "No hay tareas pendientes",
          description: "¡Buen trabajo! Has completado todas tus tareas.",
          variant: "destructive",
        })
      }
      setIsSelectingTask(false)
    }, 2000)
  }

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>
  }

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <TaskHeader />
        <TaskControls
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filter={filter}
          setFilter={setFilter}
          onAddTask={() => handleOpenDialog()}
          onSelectRandomTask={selectRandomTask}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-grow overflow-hidden">
        <div className="w-full lg:w-3/4 overflow-hidden flex flex-col">
          <TaskList
            tasks={sortedAndFilteredTasks}
            onToggleStatus={toggleTaskStatus}
            onEdit={(task) => handleOpenDialog(task)}
            onDelete={deleteTask}
            focusedTaskId={focusedTaskId}
            filter={filter}
          />
        </div>
        <TaskSidebar tasks={tasks} mascotMessage={mascotMessage} />
      </div>

      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingTask ? 'Editar Tarea' : 'Añadir Nueva Tarea'}</DialogTitle>
          </DialogHeader>
          <TaskForm onSubmit={handleSubmit} editingTask={editingTask} />
        </DialogContent>
      </Dialog>

      <Dialog open={isSelectingTask} onOpenChange={setIsSelectingTask}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Seleccionando tarea sorpresa...</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium">¡Preparando tu próximo desafío!</p>
          </div>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}