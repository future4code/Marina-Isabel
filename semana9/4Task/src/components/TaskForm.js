import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/task'
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles'
import styled from 'styled-components'


const meuTema = createMuiTheme ({
	palette:{
		primary: {
			main: '#F08080'
		},
		secondary: {
			main:'#CD5C5C'
		}
	}
})

const Input = styled.input`
	width: 20vw;
	 border: none;
     border-bottom: 2px solid grey;
`

class TaskForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputText: ''
		}
	}
  
	onChangeInput = (event) =>{
		this.setState({inputText: event.target.value})
	}
	onClickAdicionar = () => {
		this.props.addTask(this.state.inputText)
	}

	
	render() {
			return (
			<MuiThemeProvider theme={meuTema}>	
			<form>
				<Input value={this.state.inputText} onChange={this.onChangeInput} placeholder="O que tem que ser feito?"></Input>
				<Button 
					variant="contained"
					color="primary"
					size="small"
				type= "button" onClick={this.onClickAdicionar}>Adicionar</Button>
			</form>
			</MuiThemeProvider>
		)
	}
}

//alterações do estado para props
const mapStateToProps = (state) =>{
	return{}
}

//Fazer alterações no estado do redux 

// const mapDispatchToProps = (dispatch) =>{
// 	return{
// 		addTask: (text) => {
// 			dispatch(addTask(text))
// 		}
// 	}
// }

const mapDispatchToProps = dispatch => {
	return{
		addTask: text => {
			const action = addTask(text);
			dispatch(action);
		}
	}
}

// Para interagir com o reduz é preciso connectar os componentes
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
