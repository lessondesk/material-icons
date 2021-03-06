import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CupWaterIcon = ({
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
    <path d='M18.32,8H5.67L5.23,4H18.77M12,19C10.34,19 9,17.66 9,16C9,14 12,10.6 12,10.6C12,10.6 15,14 15,16C15,17.66 13.66,19 12,19M3,2L5,20.23C5.13,21.23 5.97,22 7,22H17C18,22 18.87,21.23 19,20.23L21,2H3Z' />
  </Svg>
)

CupWaterIcon.displayName = 'CupWaterIcon'

CupWaterIcon.defaultProps = {
  size: 24
}

export default CupWaterIcon