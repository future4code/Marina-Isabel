import React from 'react';
import ToolBar from './components/ToolBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import styled from 'styled-components'


const Home = styled.div`
	 min-width: 40vw;
     margin: 0 40vw;
`

const Title = styled.h1`
	font-size: 6vw;
	font-family:inherit;
	color: #CD5C5C;
`




// Quando cria um Provider é preciso fazer uma store do redux
//Após o reducer ser feito no todos.js é necessário
//que coloque como parametro da função abaixo.
const store = createStore(rootReducer)

function App() {
	return( 
		
			<Provider store={store}>
			<Home>
				<Title>4Task</Title>
				<TaskForm/>
					<TaskList/>
					<ToolBar/>
				</Home>
				</Provider>
		
		)	
	}


export default App
