import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from "./pages/login/Login";
import { List } from "./pages/list/List";
import { New } from "./pages/new/New";
import { Single } from "./pages/singles/Single";
import { productInputs, userInputs } from "./formSoucer";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs = {userInputs} title="Add New User" />} />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New  inputs={productInputs} title="Add New Product"/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
