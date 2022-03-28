import {Route, Routes, useNavigate} from 'react-router-dom'

import {BaseLayout} from "./lauouts";
import {Home} from "./pages/Home";
import {MovieDetails} from './pages/movieDetails';


function App() {
    const navigate= useNavigate();
    console.log(navigate)
    // const data= useMatch()
    // console.log(data)

    return (
        <BaseLayout>
            <Routes>
                <Route path="/movie/:id" element={<MovieDetails path={'/movie/:id'}/>}/>
                <Route path="/" element ={<Home/>}/>
                <Route path={"*"} element={<h1>page not found <button onClick={()=>navigate("/")}>go home</button></h1>} />
            </Routes>


        </BaseLayout>
    );
}

export default App;
