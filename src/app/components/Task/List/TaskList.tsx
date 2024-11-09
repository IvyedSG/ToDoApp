import { ScrollArea } from "@/components/ui/scroll-area"
import { TaskCard } from '../Card/TaskCard'
import { Task } from '@/types/task'

interface TaskListProps {
  tasks: Task[]
  onToggleStatus: (id: string) => void
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
  focusedTaskId: string | null
  filter: string
}

export function TaskList({
  tasks,
  onToggleStatus,
  onEdit,
  onDelete,
  focusedTaskId,
  filter
}: TaskListProps) {
  return (
    <ScrollArea className="flex-grow">
      <div className="grid gap-4 pr-4">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleStatus={onToggleStatus}
            onEdit={onEdit}
            onDelete={onDelete}
            isFocused={task.id === focusedTaskId}
          />
        ))}
        {tasks.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No se encontraron tareas. {filter !== 'all' ? 'Intenta cambiar el filtro o ' : ''}¡Añade algunas tareas para comenzar!
          </div>
        )}
      </div>
    </ScrollArea>
  )
}