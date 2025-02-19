interface MascotProps {
    message: string
  }
  
  export const Mascot: React.FC<MascotProps> = ({ message }) => (
    <div className="flex items-center space-x-4 bg-secondary p-4 rounded-lg">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-4xl">
        🐶
      </div>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )