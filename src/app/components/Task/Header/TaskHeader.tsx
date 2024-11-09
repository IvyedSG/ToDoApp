import { ThemeToggle } from '../../UI/ThemeToggle'

export function TaskHeader() {
  return (
    <div className="flex items-center space-x-4">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
        Gestor de Tareas
      </h1>
      <ThemeToggle />
    </div>
  )
}