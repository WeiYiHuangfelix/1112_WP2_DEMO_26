import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import BlogsStaticPage_26 from './pages/BlogsStaticPage_26';
import BlogsLocalJsonPage_26 from './pages/BlogsLocalJsonPage_26';
import BlogsNodeServerPage_26 from './pages/BlogsNodeServerPage_26';
import BlogsSupabaesPage_26 from './pages/BlogsSupabaesPage_26'

function App_26() {
  return (
    <BrowserRouter>
    <Routes  >
      <Route path= '/card_26' element = { <BlogsStaticPage_26 /> }/>
      <Route path= '/local_26' element = { < BlogsLocalJsonPage_26 /> }/>
      <Route path= '/node_26' element = { < BlogsNodeServerPage_26 /> }/>
      <Route path= '/supabaes_26' element = { < BlogsSupabaesPage_26 /> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App_26;
