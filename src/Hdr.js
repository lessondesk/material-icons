import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HdrIcon = ({
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
    <path d='M21,11.5V10.5C21,9.7 20.3,9 19.5,9H16V15H17.5V13H18.6L19.5,15H21L20.1,12.9C20.6,12.6 21,12.1 21,11.5M19.5,11.5H17.5V10.5H19.5V11.5M6.5,11H4.5V9H3V15H4.5V12.5H6.5V15H8V9H6.5V11M13,9H9.5V15H13C13.8,15 14.5,14.3 14.5,13.5V10.5C14.5,9.7 13.8,9 13,9M13,13.5H11V10.5H13V13.5Z' />
  </Svg>
)

HdrIcon.displayName = 'HdrIcon'

HdrIcon.defaultProps = {
  size: 24
}

export default HdrIcon