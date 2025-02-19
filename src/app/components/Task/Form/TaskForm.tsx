import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Task } from '@/types/task'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface TaskFormProps {
  onSubmit: (task: Partial<Task>) => void
  editingTask: Task | null
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, editingTask }) => {
  const [date, setDate] = useState<Date | undefined>(
    editingTask?.dueDate ? new Date(editingTask.dueDate) : undefined
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const taskData: Partial<Task> = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      priority: parseInt(formData.get('priority') as string) as Task['priority'],
      completed: false,
    }

    if (date) {
      taskData.dueDate = format(date, 'yyyy-MM-dd')
    }

    onSubmit(taskData)
  }
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          name="title"
          defaultValue={editingTask?.title}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={editingTask?.description}
          required
        />
      </div>
      <div>
        <Label htmlFor="dueDate">Fecha de Vencimiento</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor="priority">Prioridad</Label>
        <Select name="priority" defaultValue={editingTask?.priority?.toString() || "4"}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar prioridad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Alta</SelectItem>
            <SelectItem value="2">Media</SelectItem>
            <SelectItem value="3">Baja</SelectItem>
            <SelectItem value="4">Sin prioridad</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        {editingTask ? 'Actualizar Tarea' : 'Añadir Tarea'}
      </Button>
    </form>
  )
}