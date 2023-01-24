import { MovieDetail } from '../pages'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from '../pages/Home/Home'
interface RoutesProps {
  children?: React.ReactNode
  location?: Partial<Location> | string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RouterConfig = ({ children }: RoutesProps) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<MovieDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default RouterConfig
