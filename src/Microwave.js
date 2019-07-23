import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MicrowaveIcon = ({
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
    <path d='M4,5C2.9,5 2,5.9 2,7V17C2,18.1 2.9,19 4,19H20C21.1,19 22,18.1 22,17V7C22,5.9 21.1,5 20,5H4M4,7H16V17H4V7M19,7C19.55,7 20,7.45 20,8C20,8.55 19.55,9 19,9C18.45,9 18,8.55 18,8C18,7.45 18.45,7 19,7M13,9V15H15V9H13M19,11C19.55,11 20,11.45 20,12C20,12.55 19.55,13 19,13C18.45,13 18,12.55 18,12C18,11.45 18.45,11 19,11Z' />
  </Svg>
)

MicrowaveIcon.displayName = 'MicrowaveIcon'

MicrowaveIcon.defaultProps = {
  size: 24
}

export default MicrowaveIcon