import React from 'react'
import './Post.css'
import styled from 'styled-Component'


const PostContainer = styled.div`
    border: 1px solid gray;
    width: 300px;
` 

const PostHeader = styled.div`
    height: 40px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    padding: 10px
`

const Userfoto = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

class Post extends React.Component{
    render() {
        return 
        <PostContainer>
            <PostHeader>
                <img src={'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'} alt={'imagem do usuario'}/>
                <p>Cafebar</p>
            </PostHeader>
        </PostContainer>

        
    }

   



    


export default Post 