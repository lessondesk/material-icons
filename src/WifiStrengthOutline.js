import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WifiStrengthOutlineIcon = ({
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
    <path d='M12,3C7.79,3 3.7,4.41 0.38,7H0.36C4.24,11.83 8.13,16.66 12,21.5C15.89,16.66 19.77,11.83 23.64,7H23.65C20.32,4.41 16.22,3 12,3M12,5C15.07,5 18.09,5.86 20.71,7.45L12,18.3L3.27,7.44C5.9,5.85 8.92,5 12,5Z' />
  </Svg>
)

WifiStrengthOutlineIcon.displayName = 'WifiStrengthOutlineIcon'

WifiStrengthOutlineIcon.defaultProps = {
  size: 24
}

export default WifiStrengthOutlineIcon