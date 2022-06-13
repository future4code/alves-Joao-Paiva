import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`


class App extends React.Component {
  render() {
    return (
      <PostContainer>
      <MainContainer>
        <Post
          nomeUsuario={'Pompovick'}
          fotoUsuario={'https://picsum.photos/50/40'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>,
         <MainContainer>
         <Post2
           nomeUsuario={'Michellão'}
           fotoUsuario={'https://picsum.photos/50/30'}
           fotoPost={'https://picsum.photos/200/120'}
         />
       </MainContainer>,
          <MainContainer>
          <Post3
            nomeUsuario={'Chavoso da ZN Leste'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/170'}
          />
        </MainContainer>
      </PostContainer>
    );
  }
  
  
}

export default App;
