import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CoffeeToGoIcon = ({
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
    <path d='M3,19V17H17L15.26,15.24L16.67,13.83L20.84,18L16.67,22.17L15.26,20.76L17,19H3M17,8V5H15V8H17M17,3C18.11,3 19,3.9 19,5V8C19,9.11 18.11,10 17,10H15V11C15,13.21 13.21,15 11,15H7C4.79,15 3,13.21 3,11V3H17Z' />
  </Svg>
)

CoffeeToGoIcon.displayName = 'CoffeeToGoIcon'

CoffeeToGoIcon.defaultProps = {
  size: 24
}

export default CoffeeToGoIcon