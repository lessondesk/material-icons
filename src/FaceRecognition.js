import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FaceRecognitionIcon = ({
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
    <path d='M9,11.75C8.31,11.75 7.75,12.31 7.75,13C7.75,13.69 8.31,14.25 9,14.25C9.69,14.25 10.25,13.69 10.25,13C10.25,12.31 9.69,11.75 9,11.75M15,11.75C14.31,11.75 13.75,12.31 13.75,13C13.75,13.69 14.31,14.25 15,14.25C15.69,14.25 16.25,13.69 16.25,13C16.25,12.31 15.69,11.75 15,11.75M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C3.97,11.71 3.97,11.43 4,11.14C6.38,10.1 8.27,8.17 9.26,5.77C11.13,8.42 14.17,10 17.42,10C18.18,10 18.93,9.91 19.67,9.74C20.92,14 18.5,18.43 14.26,19.67C13.5,19.89 12.76,20 12,20M0,2C0,0.9 0.9,0 2,0H6V2H2V6H0V2M24,22C24,23.1 23.1,24 22,24H18V22H22V18H24V22M2,24C0.9,24 0,23.1 0,22V18H2V22H6V24H2M22,0C23.1,0 24,0.9 24,2V6H22V2H18V0H22Z' />
  </Svg>
)

FaceRecognitionIcon.displayName = 'FaceRecognitionIcon'

FaceRecognitionIcon.defaultProps = {
  size: 24
}

export default FaceRecognitionIcon