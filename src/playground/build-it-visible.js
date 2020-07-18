

const appRoot = document.getElementById('app')

const details = {
	content: 'These are my details.',
	visibility: false
}

const toggleVisibility = () => {
	details.visibility = !details.visibility
	render()
}

const render = () => {
		const template = (
				<div>
						<h1>Visility Toggle</h1>
						<button onClick={toggleVisibility}>{details.visibility ? 'Hide' : 'Show'} details</button>
						{details.visibility && (
							<p>{details.content}</p>
						)}
				</div>
		)
		ReactDOM.render(template, appRoot)
}

render()