import { Navigate, Route, Routes } from 'react-router-dom'
import { FormPage } from '../pages/FormPage/FormPage'
import { MainPage } from '../pages/MainPage/MainPage'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/create/*' element={<FormPage/>}/>
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </div>
  )
}

export default App
