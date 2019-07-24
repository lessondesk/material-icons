import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StackExchangeIcon = ({
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
    <path d='M4,14.04V11H20V14.04H4M4,10V7H20V10H4M17.46,2C18.86,2 20,3.18 20,4.63V6H4V4.63C4,3.18 5.14,2 6.54,2H17.46M4,15H20V16.35C20,17.81 18.86,19 17.46,19H16.5L13,22V19H6.54C5.14,19 4,17.81 4,16.35V15Z' />
  </Svg>
)

StackExchangeIcon.displayName = 'StackExchangeIcon'

StackExchangeIcon.defaultProps = {
  size: 24
}

export default StackExchangeIcon