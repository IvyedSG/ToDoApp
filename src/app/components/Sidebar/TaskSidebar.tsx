import { ScrollArea } from "@/components/ui/scroll-area"
import { TaskStatistics } from '../Statistics/TaskStatistics'
import { Mascot } from '../Mascot/Mascot'
import { Task } from '@/types/task'

interface TaskSidebarProps {
  tasks: Task[]
  mascotMessage: string
}

export function TaskSidebar({ tasks, mascotMessage }: TaskSidebarProps) {
  return (
    <ScrollArea className="w-full lg:w-1/4">
      <div className="space-y-6 pr-4">
        <TaskStatistics tasks={tasks} />
        <Mascot message={mascotMessage} />
      </div>
    </ScrollArea>
  )
}