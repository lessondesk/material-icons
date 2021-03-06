import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShoeFormalIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M21.5,9V8H20.5L19.5,9H15L14,8H13L7,12H4C2.9,12 2,12.9 2,14V16H10L13,15H15V16H21.5V14C21.5,14 22,13 22,11.5C22,10 21.5,9 21.5,9Z' />
  </Svg>
)

ShoeFormalIcon.displayName = 'ShoeFormalIcon'

ShoeFormalIcon.defaultProps = {
  size: 24
}

export default ShoeFormalIcon