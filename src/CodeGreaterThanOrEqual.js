import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CodeGreaterThanOrEqualIcon = ({
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
    <path d='M13,13H18V15H13M13,9H18V11H13M6.91,7.41L11.5,12L6.91,16.6L5.5,15.18L8.68,12L5.5,8.82M5,3C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5Z' />
  </Svg>
)

CodeGreaterThanOrEqualIcon.displayName = 'CodeGreaterThanOrEqualIcon'

CodeGreaterThanOrEqualIcon.defaultProps = {
  size: 24
}

export default CodeGreaterThanOrEqualIcon