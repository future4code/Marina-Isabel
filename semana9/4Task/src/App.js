import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ToolBar from './components/ToolBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';





// Quando cria um Provider é preciso fazer uma store do redux
//Após o reducer ser feito no todos.js é necessário
//que coloque como parametro da função abaixo.
const store = createStore(rootReducer)

function App() {
	return( 
		<Provider store={store}>
		<div>
			<h1>4Task</h1>
			   <TaskForm/>
				<TaskList/>
				<ToolBar/>
		    </div>
			</Provider>
		)	
	}


export default App
