import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PizzaIcon = ({
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
    <path d='M12,15C10.9,15 10,14.1 10,13C10,11.89 10.9,11 12,11C13.1,11 14,11.9 14,13C14,14.1 13.1,15 12,15M7,7C7,5.89 7.89,5 9,5C10.1,5 11,5.9 11,7C11,8.1 10.1,9 9,9C7.89,9 7,8.1 7,7M12,2C8.43,2 5.23,3.54 3,6L12,22L21,6C18.78,3.54 15.57,2 12,2Z' />
  </Svg>
)

PizzaIcon.displayName = 'PizzaIcon'

PizzaIcon.defaultProps = {
  size: 24
}

export default PizzaIcon