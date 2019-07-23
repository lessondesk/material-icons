import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const OilLampIcon = ({
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
    <path d='M5,20H16V22H5M11,5H10C8.9,5 8,5.9 8,7H13C13,5.9 12.1,5 11,5M16,8H22C22,9.1 21.1,10 20,10H19C16.79,10 15,11.79 15,14V15C15,17.21 13.21,19 11,19H10C7.79,19 6,17.21 6,15H4C2.9,15 2,14.1 2,13V10C2,8.9 2.9,8 4,8M6,10H4V13H6M19,5C20.1,5 21,5.9 21,7H22C22,5.4 20.6,4 19,4C17.9,4 17,3.1 17,2H16C16,3.6 17.4,5 19,5' />
  </Svg>
)

OilLampIcon.displayName = 'OilLampIcon'

OilLampIcon.defaultProps = {
  size: 24
}

export default OilLampIcon