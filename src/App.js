import logo from "./logo.svg";
import "./App.css";
import ConctactoComponent from "./components/pure/forms/conctacto";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ConctactoComponent></ConctactoComponent>
			</header>
		</div>
	);
}

export default App;
