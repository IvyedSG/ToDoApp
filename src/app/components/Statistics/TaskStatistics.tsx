import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from "@/components/ui/progress"
import { Task, priorityColors } from '@/types/task'

interface TaskStatisticsProps {
  tasks: Task[]
}

export const TaskStatistics: React.FC<TaskStatisticsProps> = ({ tasks }) => {
  const completedTasksCount = tasks.filter(task => task.completed).length
  const totalTasksCount = tasks.length
  const completionPercentage = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estadísticas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium">Progreso total</h3>
            <Progress value={completionPercentage} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-1">{completedTasksCount} de {totalTasksCount} tareas completadas</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Tareas por prioridad</h3>
            <div className="mt-2 space-y-1">
              {Object.entries(priorityColors).map(([priority, color]) => (
                <div key={priority} className="flex items-center">
                  <div style={{ backgroundColor: color }} className="w-3 h-3 rounded-full mr-2"></div>
                  <span className="text-sm">Prioridad {priority}: {tasks.filter(t => t.priority === +priority).length}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </CardContent>
    </Card>
  )
}