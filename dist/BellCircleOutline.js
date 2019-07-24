import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BellCircleOutlineIcon = ({
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
    <path d='M17,16H7V15L8,14V11.39C8,10.3 8.27,9.34 8.79,8.53C9.3,7.72 10.04,7.21 11,7V6.5C11,5.95 11.45,5.5 12,5.5C12.55,5.5 13,5.95 13,6.5V7C13.96,7.21 14.7,7.72 15.21,8.53C15.73,9.34 16,10.3 16,11.39V14L17,15V16M13.5,17C13.5,17.83 12.83,18.5 12,18.5C11.17,18.5 10.5,17.83 10.5,17H13.5M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z' />
  </Svg>
)

BellCircleOutlineIcon.displayName = 'BellCircleOutlineIcon'

BellCircleOutlineIcon.defaultProps = {
  size: 24
}

export default BellCircleOutlineIcon