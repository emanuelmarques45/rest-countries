import styled from 'styled-components'
import { devices } from '../../assets/devices'

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  width: 100vw;
  background-color: ${props => props.theme.colors.elements};
  box-shadow: 0 5px 10px var(--bs-200);

  & > div {
    height: 12vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (${devices.tablet}) {
      width: 85vw;
    }

    h1 {
      font-size: max(var(--fz-400), 2vw);
    }
  }
`

export const StyledButtonToggleTheme = styled.span`
  padding: 0.4rem 0.6rem;
  border-radius: 0.8rem;

  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }

  svg {
    margin-right: 0.5rem;
  }

  button {
    background-color: transparent;
    font-size: max(var(--fz-400), 1vw);
    pointer-events: none;
  }
`
