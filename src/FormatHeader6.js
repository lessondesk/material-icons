import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatHeader6Icon = ({
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
    <path d='M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19C20.1,4 21,4.9 21,6V7H19V6H15V10H19C20.1,10 21,10.9 21,12V16C21,17.1 20.1,18 19,18H15C13.9,18 13,17.1 13,16V6C13,4.9 13.9,4 15,4M15,12V16H19V12H15Z' />
  </Svg>
)

FormatHeader6Icon.displayName = 'FormatHeader6Icon'

FormatHeader6Icon.defaultProps = {
  size: 24
}

export default FormatHeader6Icon