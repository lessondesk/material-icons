import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HumanGreetingIcon = ({
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
    <path d='M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4C11.79,4 10,5.79 10,8C10,10.21 11.79,12 14,12C16.21,12 18,10.21 18,8C18,5.79 16.21,4 14,4Z' />
  </Svg>
)

HumanGreetingIcon.displayName = 'HumanGreetingIcon'

HumanGreetingIcon.defaultProps = {
  size: 24
}

export default HumanGreetingIcon