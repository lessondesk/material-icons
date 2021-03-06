import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LooksIcon = ({
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
    <path d='M12,6C5.92,6 1,10.92 1,17H3C3,12.04 7.04,8 12,8C16.96,8 21,12.04 21,17H23C23,10.92 18.08,6 12,6M12,10C8.14,10 5,13.14 5,17H7C7,14.24 9.24,12 12,12C14.76,12 17,14.24 17,17H19C19,13.14 15.86,10 12,10Z' />
  </Svg>
)

LooksIcon.displayName = 'LooksIcon'

LooksIcon.defaultProps = {
  size: 24
}

export default LooksIcon