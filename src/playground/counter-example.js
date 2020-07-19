class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.handleAddOne = this.handleAddOne.bind(this)
		this.handleMinusOne = this.handleMinusOne.bind(this)
		this.handleReset = this.handleReset.bind(this)
		//1. Create default state object
		this.state = {
			count: 0,
			name: 'Erick'
		}
	}
	handleAddOne(){
		// 3. setState let's us manipulate the state based on the event
		// It has a function argument that returns an object, where we define the updates
		this.setState((prevState) => {
			return {
				// 5. On this function, we receive on the first argument: prevState as the previous state of the component
				count: prevState.count + 1
			}
		})
	}
	handleMinusOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		})
	}
	handleReset(){
		this.setState(() => {
			return {
				count: 0
			}
		})
	}
	render(){
		return(
			<div>
				{/*2. Component rendered with default state value and 4. re-renders with new value*/}
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		)
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0

// const addOne = () => {
// 	count++
// 	renderCounterApp()
// }

// const subtractOne = () => {
// 	count--
// 	renderCounterApp()
// }

// const setupReset = () => {
// 	count = 0
// 	renderCounterApp()
// }


// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={subtractOne}>-1</button>
// 			<button onClick={setupReset}>Reset</button>
// 		</div>
// 	)
// 	ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()