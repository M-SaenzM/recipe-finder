import './styles/App.css'
import './components/searchBar'
import SearchPage from './pages/searchPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './pages/recipeDetail'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="/recipe/:id" element={<RecipeDetail/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
