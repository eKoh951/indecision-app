const obj = {
	name: 'Vikram',
	getName(){
		return this.name
	}
}
const getName = obj.getName.bind({ name: 'Erick'})

console.log(getName())

class IndecisionApp extends React.Component{
	render(){
		const title = 'Indecision'
		const subtitle = 'Put your life in the hands of a computer'
		const options = ['One', 'Two', 'Three', 'Four']
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		)
	}
}
// Creating a component
class Header extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subttitle}</h2>
			</div>
		)
	}
}

class Action extends React.Component {
	handlePick(){
		alert('handlePick')
	}
	render(){
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		)
	}
}

class Options extends React.Component {
	constructor(props){
		super(props)
		//Binding to the funcion from the beginning, it only executes once
		this.handleRemoveAll = this.handleRemoveAll.bind(this)
	}
	handleRemoveAll(){
		console.log(this.props.options)
	}
	render(){
		const options = this.props.options
		return(
			<div>
				{/*Bind.this is expensive here, because it would be inside render function*/}
				<button onClick={this.handleRemoveAll}>Remove All</button>
				{options.map((option) => <Option key={option} optionText={option}/>)}
			</div>
		)
	}
}

class Option extends React.Component {
	render(){
		return (
			<div>
				Option: {this.props.optionText}
			</div>
		)
	}
}

class AddOption extends React.Component {

	handleAddOption(e) {
		e.preventDefault()
		const option = e.target.elements.option.value.trim()
		if(option) console.log(option)
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))