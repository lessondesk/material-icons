import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ExpandAllIcon = ({
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
    <path d='M18,8H8V18H6V8C6,6.9 6.9,6 8,6H18V8M14,2H4C2.9,2 2,2.9 2,4V14H4V4H14V2M22,12V20C22,21.1 21.1,22 20,22H12C10.9,22 10,21.1 10,20V12C10,10.9 10.9,10 12,10H20C21.1,10 22,10.9 22,12M20,15H17V12H15V15H12V17H15V20H17V17H20V15Z' />
  </Svg>
)

ExpandAllIcon.displayName = 'ExpandAllIcon'

ExpandAllIcon.defaultProps = {
  size: 24
}

export default ExpandAllIcon