import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Task, priorityColors } from '@/types/task'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'


interface TaskCardProps {
  task: Task
  onToggleStatus: (id: string) => void
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
  isFocused: boolean
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleStatus, onEdit, onDelete, isFocused }) => (
  <Card className={`transition-all duration-300 hover:shadow-md ${isFocused ? 'ring-2 ring-primary' : ''}`}>
    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
      <div className="flex items-start space-x-4">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggleStatus(task.id)}
          className="mt-1"
        />
        <div>
          <CardTitle className={`text-lg ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
            {task.title}
          </CardTitle>
          <div className="flex items-center space-x-2 mt-1">
            <Badge style={{ backgroundColor: priorityColors[task.priority] }} className="text-white">
              P{task.priority}
            </Badge>
            <p className="text-sm text-muted-foreground">Fecha: {task.dueDate ? format(new Date(task.dueDate), 'PPP', { locale: es }) : 'Sin fecha'}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(task)}
          className="hover:bg-secondary"
        >
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(task.id)}
          className="hover:bg-destructive hover:text-destructive-foreground"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm">{task.description}</p>
    </CardContent>
  </Card>
)