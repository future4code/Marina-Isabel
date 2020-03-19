import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const theme = createMuiTheme()

function App() {
	return( 
		<div>
			<h1>4Task</h1>
				<form>
					<input type="" placeholder="O que tem que ser feito?"></input>
					<button>Adicionar</button>
				</form>

				<ul>
					<li>Task 1</li>
					
				</ul>
				<div>
					<button>Marcar Todas como completas</button>
					<p>Filtros: </p>				
					<button>Todas</button>
					<button>Pendentes</button>
					<button>Completas</button>
				</div>
					<div>
					<button>Remover tarefas completas</button>
					</div>
		    </div>
		)	
	}


export default App
