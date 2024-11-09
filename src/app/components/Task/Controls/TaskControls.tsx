import { Plus, Search, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FilterType } from '@/types/task'

interface TaskControlsProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  filter: FilterType
  setFilter: (filter: FilterType) => void
  onAddTask: () => void
  onSelectRandomTask: () => void
}

export function TaskControls({
  searchQuery,
  setSearchQuery,
  filter,
  setFilter,
  onAddTask,
  onSelectRandomTask
}: TaskControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 w-full sm:w-auto justify-center sm:justify-end">
      <div className="relative w-full sm:w-64">
        <Input
          type="text"
          placeholder="Buscar tareas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>
      <Select
        value={filter}
        onValueChange={(value: FilterType) => setFilter(value)}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Filtrar tareas" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas las Tareas</SelectItem>
          <SelectItem value="pending">Pendientes</SelectItem>
          <SelectItem value="completed">Completadas</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={onAddTask} className="w-full sm:w-auto">
        <Plus className="mr-2 h-4 w-4" /> Añadir Tarea
      </Button>
      <Button onClick={onSelectRandomTask} className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white">
        <Sparkles className="mr-2 h-4 w-4" /> Tarea Sorpresa
      </Button>
    </div>
  )
}