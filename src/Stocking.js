import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StockingIcon = ({
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
    <path d='M17,2C18.1,2 19,2.9 19,4V7C19,8.1 18.1,9 17,9V17C17,17.85 16.5,18.57 15.74,18.86L9.5,21.77C8.5,22.24 7.29,21.81 6.83,20.81L6,19C5.5,18 5.95,16.8 6.95,16.34L10,14.91V9C8.9,9 8,8.1 8,7V4C8,2.9 8.9,2 10,2H17M10,4V7H17V4H10Z' />
  </Svg>
)

StockingIcon.displayName = 'StockingIcon'

StockingIcon.defaultProps = {
  size: 24
}

export default StockingIcon