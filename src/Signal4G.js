import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Signal4GIcon = ({
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
    <path d='M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C14.34,4.5 13,5.84 13,7.5V16.5C13,18.16 14.34,19.5 16,19.5H19C20.66,19.5 22,18.16 22,16.5M8,19.5H11V4.5H8V10.5H5V4.5H2V13.5H8V19.5Z' />
  </Svg>
)

Signal4GIcon.displayName = 'Signal4GIcon'

Signal4GIcon.defaultProps = {
  size: 24
}

export default Signal4GIcon