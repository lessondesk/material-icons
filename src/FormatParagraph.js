import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatParagraphIcon = ({
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
    <path d='M13,4C15.21,4 17,5.79 17,8C17,10.21 15.21,12 13,12H11V18H9V4H13M13,10C14.1,10 15,9.1 15,8C15,6.9 14.1,6 13,6H11V10H13Z' />
  </Svg>
)

FormatParagraphIcon.displayName = 'FormatParagraphIcon'

FormatParagraphIcon.defaultProps = {
  size: 24
}

export default FormatParagraphIcon