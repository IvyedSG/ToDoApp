export interface Task {
    id: string
    title: string
    description: string
    completed: boolean
    dueDate: string
    priority: 1 | 2 | 3 | 4
  }
  
  export type FilterType = 'all' | 'pending' | 'completed'
  
  
  export const priorityColors: { [key in 1 | 2 | 3 | 4]: string } = {
    1: 'rgb(239, 68, 68)',
    2: 'rgb(250, 204, 21)',
    3: 'rgb(37, 99, 235)',
    4: 'rgb(107, 114, 128)',
  };
