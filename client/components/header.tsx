
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="bg-primary text-primary-foreground w-full py-4 px-6 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Hospital Food Management System</h1>
      </div>
    </header>
  )
}

export default Header

