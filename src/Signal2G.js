import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Signal2GIcon = ({
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
    <path d='M11,19.5H2V13.5C2,11.84 3.34,10.5 5,10.5H8V7.5H2V4.5H8C9.66,4.5 11,5.84 11,7.5V10.5C11,12.16 9.66,13.5 8,13.5H5V16.5H11M22,10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C14.34,4.5 13,5.84 13,7.5V16.5C13,18.16 14.34,19.5 16,19.5H19C20.66,19.5 22,18.16 22,16.5' />
  </Svg>
)

Signal2GIcon.displayName = 'Signal2GIcon'

Signal2GIcon.defaultProps = {
  size: 24
}

export default Signal2GIcon