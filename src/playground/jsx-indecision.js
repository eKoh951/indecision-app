console.log('App.js is running')

// create app object title/subtitle
// user title/subtitle in the template

// JSX - JavaScript XML
var app = {
	title: 'I need to Miriam to fall in love with me',
	subtitle: 'I like Miriam, she is amazing.',
	options: []
}
const onFormSubmit = (e) =>{
	e.preventDefault()

	const option = e.target.elements.option.value

	if(option){
		app.options.push(option)
		e.target.elements.option.value = ''
		render()
	}
}

const onRemoveAll = (e) =>{
	if(app.options.length){
		app.options = []
		render()	
	}
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length)
	const option = app.options[randomNum]
	alert(option)
}

const appRoot = document.getElementById('app')

const render = () =>{
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{app.options.map((option) => {
					return <li key={option}>Item: {option}</li>
				})}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
		)
		ReactDOM.render(template, appRoot)		
}

render()