import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Signal5GIcon = ({
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
    <path d='M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C14.34,4.5 13,5.84 13,7.5V16.5C13,18.16 14.34,19.5 16,19.5H19C20.66,19.5 22,18.16 22,16.5M10,4.5H3V12L3,13.5H7V16.5H3V19.5H8.5C9.33,19.5 10,18.83 10,18V12C10,11.17 9.33,10.5 8.5,10.5H6V7.5H10V4.5Z' />
  </Svg>
)

Signal5GIcon.displayName = 'Signal5GIcon'

Signal5GIcon.defaultProps = {
  size: 24
}

export default Signal5GIcon