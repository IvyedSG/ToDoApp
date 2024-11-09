import { Loader2 } from 'lucide-react'

export default function CustomLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </div>
        <svg 
          className="animate-spin text-muted-foreground/20" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeDasharray="70 200"
          />
        </svg>
      </div>
      <p className="mt-4 text-lg font-medium animate-pulse">Cargando...</p>
    </div>
  )
}