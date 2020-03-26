import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core';




const FormStyle = styled.form`
    border: 2px solid gray;
    width: 50%;
    text-align:center;  
    display:flex;
    justify-content: space-around;
    flex-flow: row wrap;
    background-color: orange;
    color:black;
    
`
const PageStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    width: 100%;
    padding:0 10%;
   
   
`
class ApplicationForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:'',
            profession:'',
            country: '',
            text:''
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render(){

        

    return(

        <PageStyle>
            <h2>Formulário do Candidato</h2>
            <FormStyle> 
                <TextField 
                    id="filled-name"
                    label="Nome"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="filled"
                    />
                <TextField 
                    id="filled-number"
                    label="Idade"
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="filled"
                 />
                <TextField
                   id="filled-name"
                   label="Profissão"
                   value={this.state.profession}
                   onChange={this.handleChange('profession')}
                   margin="normal"
                   variant="filled"/>
                <TextField 
                    id="filled-name"
                    label="País"
                    value={this.state.country}
                    onChange={this.handleChange('country')}
                    margin="normal"
                    variant="filled"/>
                    <TextField
                    id="filled-full-width"
                    label="Escreva aqui porque você merece essa viagem!"
                    style={{ margin: 8 }}
                    fullWidth
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                    shrink: true,
                    }}
                 />
                <Button>Salvar</Button>
            </FormStyle>
            
        </PageStyle>
    )
  }
}
export default  (ApplicationForm);