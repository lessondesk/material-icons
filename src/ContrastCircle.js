import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContrastCircleIcon = ({
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
    <path d='M12,20C9.79,20 7.79,19.1 6.34,17.66L17.66,6.34C19.1,7.79 20,9.79 20,12C20,16.42 16.42,20 12,20M6,8H8V6H9.5V8H11.5V9.5H9.5V11.5H8V9.5H6M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,16H17V14.5H12V16Z' />
  </Svg>
)

ContrastCircleIcon.displayName = 'ContrastCircleIcon'

ContrastCircleIcon.defaultProps = {
  size: 24
}

export default ContrastCircleIcon