class IndecisionApp extends React.Component{
	constructor(props) {
		super(props)
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
		this.handleDeleteOption = this.handleDeleteOption.bind(this)
		this.handlePick = this.handlePick.bind(this)
		this.handleAddOption = this.handleAddOption.bind(this)
		this.state = {
			options: props.options
		}
	}
	handleDeleteOptions(){
		// When we wrap up an {} with () like this ({}) on an arrow function
		//   we mean to return a empy object
		// On the following we mean to return an object with a property Options
		//   that has an empty array
		this.setState(() =>	( {options: []} ))
	}
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}))
	}
	handlePick(){
		const randomNum = Math.floor(Math.random() * this.state.options.length)
		alert(this.state.options[randomNum])
	}
	handleAddOption(option){
		if(!option){
			return 'Enter valid value to add item'
			// .indexOf('content-within-the-array-variable') returns the index
			//   but also returns -1 if the index does not exist
			// A totally new option, would not fall on this statement
			//   but if an existant option would fall on this statement
			//   then we have a match between options, it should not pass
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists.'
		}

			// Invalid because it returns the length of the new array
			// options: prevState.options.push(option)
			// Rather we use concat() array method to write over options
			//   since it returns a new array
			this.setState((prevState) => ({
				options: prevState.options.concat(option)
			}))
	}
	render(){
		const subtitle = 'Put your life in the hands of a computer'
		return (
			<div>
				<Header
					subtitle={subtitle}
				/>
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
					/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		)
	}
}

IndecisionApp.defaultProps = {
	options: []
}

// Creating a functional stateless component
const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle &&
				<h2>{props.subtitle}</h2>
			}
		</div>
	)
}

Header.defaultProps = {
	title: 'Indecision App'
}

const Action = (props) => {
	return (
		<div>
			<button
				onClick={props.handlePick}
				disabled={!props.hasOptions}
				>
				What should I do?
			</button>
		</div>
	)
}

const Options = (props) => {
	const options = props.options
	return(
		<div>
			{/*Bind.this is expensive here, because it would be inside render function*/}
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{options.map((option) => (
					<Option
						key={option}
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	)
}

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
				// When we wrap a method call with a function
				//  it does not trigger as the page loads
				//  instead it triggers as usual
				onClick={(e) => {
					props.handleDeleteOption(props.optionText)
				}}
			>
				Remove
			</button>
		</div>
	)
}

class AddOption extends React.Component {
	constructor(props) {
		super(props)
		this.handleAddOption = this.handleAddOption.bind(this)
		// Component state
		this.state = {
			error: undefined
		}
	}
	handleAddOption(e) {
		e.preventDefault()
		const option = e.target.elements.option.value.trim()
		const error = this.props.handleAddOption(option)
		
		// Manipulate component state
		this.setState(() => ({ error }) )
	}
	render(){
		return(
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

ReactDOM.render(
	<IndecisionApp
		options={
				[
					'thing1',
					'thing2'
				]
		}
	/>,
	document.getElementById('app')
)