import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CastleIcon = ({
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
    <path d='M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19C11,17.9 10.1,17 9,17C7.9,17 7,17.9 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z' />
  </Svg>
)

CastleIcon.displayName = 'CastleIcon'

CastleIcon.defaultProps = {
  size: 24
}

export default CastleIcon