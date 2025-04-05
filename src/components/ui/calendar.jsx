// src/components/ui/calendar.jsx
"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay()
}

const Calendar = React.forwardRef(({
  className,
  selected,
  onSelect,
  disabled,
  mode = "single",
  ...props
}, ref) => {
  const today = new Date()
  const [viewDate, setViewDate] = React.useState(selected || today)
  
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)
  
  const monthName = viewDate.toLocaleString('default', { month: 'long' })
  
  const prevMonth = () => {
    setViewDate(new Date(year, month - 1, 1))
  }
  
  const nextMonth = () => {
    setViewDate(new Date(year, month + 1, 1))
  }
  
  const handleDateClick = (day) => {
    const date = new Date(year, month, day)
    onSelect?.(date)
  }
  
  const isDateDisabled = (day) => {
    if (!disabled) return false
    const date = new Date(year, month, day)
    return disabled(date)
  }
  
  const isSelected = (day) => {
    if (!selected) return false
    const date = new Date(year, month, day)
    return date.toDateString() === selected.toDateString()
  }
  
  const isToday = (day) => {
    const date = new Date(year, month, day)
    return date.toDateString() === today.toDateString()
  }
  
  return (
    <div className={cn("p-4 w-full bg-white dark:bg-gray-800 rounded-lg", className)} ref={ref} {...props}>
      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={prevMonth}
          className="h-7 w-7"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="sr-only">Previous month</span>
        </Button>
        <div className="text-sm font-medium">
          {monthName} {year}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={nextMonth}
          className="h-7 w-7"
        >
          <ChevronRightIcon className="h-4 w-4" />
          <span className="sr-only">Next month</span>
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, i) => (
          <div 
            key={day} 
            className="text-xs font-medium text-center text-gray-500 dark:text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="h-9"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const disabled = isDateDisabled(day)
          const selected = isSelected(day)
          const today = isToday(day)
          
          return (
            <Button
              key={day}
              variant="ghost"
              size="icon"
              disabled={disabled}
              onClick={() => handleDateClick(day)}
              className={cn(
                "h-9 w-9 p-0 font-normal",
                today && "border border-green-500",
                selected && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 font-medium",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {day}
            </Button>
          )
        })}
      </div>
    </div>
  )
})
Calendar.displayName = "Calendar"

export { Calendar }