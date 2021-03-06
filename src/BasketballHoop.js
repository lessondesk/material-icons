import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BasketballHoopIcon = ({
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
    <path d='M21,2H3C1.9,2 1,2.9 1,4V16C1,17.1 1.9,18 3,18H5V14H19V18H21C22.1,18 23,17.1 23,16V4C23,2.9 22.1,2 21,2M17,12H15V9H9V12H7V9C7,7.9 7.9,7 9,7H15C16.1,7 17,7.9 17,9V12M7,16V19.5L8,23L10,21L12,23L14,21L16,23L17,19.5V16H7Z' />
  </Svg>
)

BasketballHoopIcon.displayName = 'BasketballHoopIcon'

BasketballHoopIcon.defaultProps = {
  size: 24
}

export default BasketballHoopIcon