import { Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation/navigation.component'
import Home from './routes/home/home.component'
import SignIn from './routes/signin/signin.component'

const Shop = () => {
  return (
    <h2>Shop here</h2>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={ <SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
