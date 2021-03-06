import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 4.5em;
  text-transform: uppercase;
  line-height: 1;

  ${(props) => !props.noMargin && 'margin-left: 16px'}
`

export default Title
