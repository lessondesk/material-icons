import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatHeader2Icon = ({
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
    <path d='M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15C13.9,18 13,17.1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8C19,6.9 18.1,6 17,6C15.9,6 15,6.9 15,8H13C13,5.79 14.79,4 17,4C19.21,4 21,5.79 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z' />
  </Svg>
)

FormatHeader2Icon.displayName = 'FormatHeader2Icon'

FormatHeader2Icon.defaultProps = {
  size: 24
}

export default FormatHeader2Icon