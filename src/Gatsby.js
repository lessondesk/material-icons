import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GatsbyIcon = ({
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
    <path d='M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C8.27,4 5.14,6.55 4.25,10L14,19.75C17.45,18.86 20,15.73 20,12H14.75V13.5H18.2C17.71,15.54 16.24,17.19 14.31,17.94L6.06,9.69C7,7.31 9.3,5.63 12,5.63C14.13,5.63 16,6.67 17.18,8.28L18.41,7.22C16.95,5.26 14.63,4 12,4M4,12C4,16.42 7.58,20 12,20C12.04,20 12.09,20 4,12Z' />
  </Svg>
)

GatsbyIcon.displayName = 'GatsbyIcon'

GatsbyIcon.defaultProps = {
  size: 24
}

export default GatsbyIcon