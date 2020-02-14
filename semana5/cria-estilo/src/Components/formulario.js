import React from 'react';
import styled from 'styled-components'





    render() {
        return (
            <Container>

        <FormularioEstilo>
            <label>Nome do Usuário: </label>
            <InputEstilo value={this.props.autor} onChange={ this.onChangeAutor }/>
            <label>Foto de perfil (url): </label>
            <InputEstilo value={this.props.imagemPerfil} onChange={ this.onChangeImagemPerfil }/>
            <label>Foto do Post (url): </label>
            <InputEstilo value={this.props.imagemPost} onChange={ this.onChangePost }/>
            <BotaoEstilo onClick={this.criaPost}>Criar Post</BotaoEstilo>
          </FormularioEstilo>
                
                
                
            </Container>
        )
    }

}

export default FormularioPost