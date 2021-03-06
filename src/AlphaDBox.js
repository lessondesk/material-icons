import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaDBoxIcon = ({
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
    <path d='M9,7V17H13C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H9M11,9H13V15H11V9M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3Z' />
  </Svg>
)

AlphaDBoxIcon.displayName = 'AlphaDBoxIcon'

AlphaDBoxIcon.defaultProps = {
  size: 24
}

export default AlphaDBoxIcon