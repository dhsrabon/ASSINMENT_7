import { createContext, useContext, useMemo, useState } from 'react'

const TimelineContext = createContext()

const initialEntries = [
  { id: 1, type: 'meetup', title: 'Meetup with Tom Baker', date: '2026-03-29' },
  { id: 2, type: 'text', title: 'Text with Sarah Chen', date: '2026-03-28' },
  { id: 3, type: 'meetup', title: 'Meetup with Olivia Martinez', date: '2026-03-26' },
  { id: 4, type: 'video', title: 'Video with Aisha Patel', date: '2026-03-23' },
  { id: 5, type: 'meetup', title: 'Meetup with Sarah Chen', date: '2026-03-21' },
  { id: 6, type: 'call', title: 'Call with Marcus Johnson', date: '2026-03-19' },
  { id: 7, type: 'meetup', title: 'Meetup with Aisha Patel', date: '2026-03-17' },
  { id: 8, type: 'text', title: 'Text with Olivia Martinez', date: '2026-03-13' },
  { id: 9, type: 'call', title: 'Call with Lisa Nakamura', date: '2026-03-11' },
  { id: 10, type: 'call', title: 'Call with Sarah Chen', date: '2026-03-11' },
  { id: 11, type: 'video', title: 'Video with Marcus Johnson', date: '2026-03-06' },
  { id: 12, type: 'video', title: 'Video with Ryan O’Brien', date: '2026-02-24' },
]

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(initialEntries)

  const addEntry = (type, friendName) => {
    const mapTitle = {
      call: `Call with ${friendName}`,
      text: `Text with ${friendName}`,
      video: `Video with ${friendName}`,
    }

    const newEntry = {
      id: Date.now(),
      type,
      title: mapTitle[type],
      date: new Date().toISOString().split('T')[0],
    }

    setEntries(prev => [newEntry, ...prev])
  }

  const value = useMemo(() => ({ entries, addEntry }), [entries])

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  )
}

export function useTimeline() {
  return useContext(TimelineContext)
}