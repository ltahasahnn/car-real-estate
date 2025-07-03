'use client'
import { Moon, Sun } from 'lucide-react'
// DarkModeToggle.js
import { useState, useEffect } from 'react'

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)

    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)

    localStorage.setItem('darkMode', (!darkMode).toString())

    document.documentElement.classList.toggle('dark')
  }

  return (
    <button className="text-gray-400" onClick={toggleDarkMode}>
      {darkMode ? <Sun /> : <Moon />}
    </button>
  )
}

export default DarkModeToggle
