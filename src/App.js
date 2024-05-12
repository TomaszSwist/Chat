import './App.css'
import { Header } from './components/Header';
import { ChatPage } from './pages/ChatPage'
import { ErrorPage } from './pages/ErrorPage'
import { ProfilePage } from './pages/ProfilePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
    
		<div className='App'>
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
        <Route path='/' element={<ProfilePage />}/>
        <Route path='/chat' element={<ChatPage />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>		
      </main>	
      </BrowserRouter>
      
		</div>
    
	)
}

export default App
