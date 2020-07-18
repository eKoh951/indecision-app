let count = 0

const addOne = () => {
	count++
	renderCounterApp()
}

const subtractOne = () => {
	count--
	renderCounterApp()
}

const setupReset = () => {
	count = 0
	renderCounterApp()
}


const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={subtractOne}>-1</button>
			<button onClick={setupReset}>Reset</button>
		</div>
	)
	ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()