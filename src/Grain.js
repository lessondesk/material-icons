import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GrainIcon = ({
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
    <path d='M10,12C8.9,12 8,12.9 8,14C8,15.1 8.9,16 10,16C11.1,16 12,15.1 12,14C12,12.9 11.1,12 10,12M6,8C4.9,8 4,8.9 4,10C4,11.1 4.9,12 6,12C7.1,12 8,11.1 8,10C8,8.9 7.1,8 6,8M6,16C4.9,16 4,16.9 4,18C4,19.1 4.9,20 6,20C7.1,20 8,19.1 8,18C8,16.9 7.1,16 6,16M18,8C19.1,8 20,7.1 20,6C20,4.9 19.1,4 18,4C16.9,4 16,4.9 16,6C16,7.1 16.9,8 18,8M14,16C12.9,16 12,16.9 12,18C12,19.1 12.9,20 14,20C15.1,20 16,19.1 16,18C16,16.9 15.1,16 14,16M18,12C16.9,12 16,12.9 16,14C16,15.1 16.9,16 18,16C19.1,16 20,15.1 20,14C20,12.9 19.1,12 18,12M14,8C12.9,8 12,8.9 12,10C12,11.1 12.9,12 14,12C15.1,12 16,11.1 16,10C16,8.9 15.1,8 14,8M10,4C8.9,4 8,4.9 8,6C8,7.1 8.9,8 10,8C11.1,8 12,7.1 12,6C12,4.9 11.1,4 10,4Z' />
  </Svg>
)

GrainIcon.displayName = 'GrainIcon'

GrainIcon.defaultProps = {
  size: 24
}

export default GrainIcon