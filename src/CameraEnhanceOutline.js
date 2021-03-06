import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CameraEnhanceOutlineIcon = ({
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
    <path d='M12,10L11.06,12.06L9,13L11.06,13.94L12,16L12.94,13.94L15,13L12.94,12.06L12,10M20,5H16.83L15,3H9L7.17,5H4C2.9,5 2,5.9 2,7V19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19V7C22,5.9 21.1,5 20,5M20,19H4V7H8.05L8.64,6.35L9.88,5H14.12L15.36,6.35L15.95,7H20V19M12,8C9.24,8 7,10.24 7,13C7,15.76 9.24,18 12,18C14.76,18 17,15.76 17,13C17,10.24 14.76,8 12,8M12,16C10.34,16 9,14.66 9,13C9,11.34 10.34,10 12,10C13.66,10 15,11.34 15,13C15,14.66 13.66,16 12,16Z' />
  </Svg>
)

CameraEnhanceOutlineIcon.displayName = 'CameraEnhanceOutlineIcon'

CameraEnhanceOutlineIcon.defaultProps = {
  size: 24
}

export default CameraEnhanceOutlineIcon