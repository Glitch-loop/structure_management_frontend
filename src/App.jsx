import Login from "./layout/Login";
import Main from "./layout/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./styles/index.css";

const App = () => {
	return(
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>}/>
					<Route path="/main" element={<Main/>}>

					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
