import clsx from 'clsx'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx('mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-4', className)}>
      {children}
    </div>
  )
}

export default Container
