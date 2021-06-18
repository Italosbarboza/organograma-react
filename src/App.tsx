import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Organograma } from './components/Organograma';

// example
const Title = styled.h1 `
    color: red;
`

export function App() {
  return (
    <>
        <Organograma />
    </>
  );
}

