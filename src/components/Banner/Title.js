import React from 'react'
import styled from 'styled-components'
const Title = ({ title }) => {
  return <Wrapper>Banner Title</Wrapper>
}
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;
  h4 {
    color: var(--clr-grey-3);
    text-transform: uppercase;
    font-weight: 500;
    background: var(--clr-white);
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
  }
  .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1.5px;
    transform: translateY(-50%);
    background: var(--clr-primary-5);
    z-index: -1;
  }
`
export default Title
