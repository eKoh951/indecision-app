class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props)
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
		this.state = {
			content: 'These are my details.',
			visibility: false
		}
	}
	handleToggleVisibility(){
		this.setState((prevState) => { 
			return {
				visibility: !prevState.visibility
			}
		})
	}
	render(){
		return(
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'} details</button>
				{this.state.visibility && (
					<p>{this.state.content}</p>
				)}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app')

// const details = {
// 	content: 'These are my details.',
// 	visibility: false
// }

// const toggleVisibility = () => {
// 	details.visibility = !details.visibility
// 	render()
// }

// const render = () => {
// 		const template = (
// 				<div>
// 						<h1>Visility Toggle</h1>
// 						<button onClick={toggleVisibility}>{details.visibility ? 'Hide' : 'Show'} details</button>
// 						{details.visibility && (
// 							<p>{details.content}</p>
// 						)}
// 				</div>
// 		)
// 		ReactDOM.render(template, appRoot)
// }

// render()