import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CameraOffIcon = ({
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
    <path d='M1.2,4.47L2.5,3.2L20,20.72L18.73,22L16.73,20H4C2.9,20 2,19.1 2,18V6C2,5.78 2.04,5.57 2.1,5.37L1.2,4.47M7,4L9,2H15L17,4H20C21.1,4 22,4.9 22,6V18C22,18.6 21.74,19.13 21.32,19.5L16.33,14.5C16.76,13.77 17,12.91 17,12C17,9.24 14.76,7 12,7C11.09,7 10.23,7.24 9.5,7.67L5.82,4H7M7,12C7,14.76 9.24,17 12,17C12.5,17 13.03,16.92 13.5,16.77L11.72,15C10.29,14.85 9.15,13.71 9,12.28L7.23,10.5C7.08,10.97 7,11.5 7,12M12,9C13.66,9 15,10.34 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9Z' />
  </Svg>
)

CameraOffIcon.displayName = 'CameraOffIcon'

CameraOffIcon.defaultProps = {
  size: 24
}

export default CameraOffIcon