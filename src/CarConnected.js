import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CarConnectedIcon = ({
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
    <path d='M5,14H19L17.5,9.5H6.5L5,14M17.5,19C18.33,19 19,18.33 19,17.5C19,16.67 18.33,16 17.5,16C16.67,16 16,16.67 16,17.5C16,18.33 16.67,19 17.5,19M6.5,19C7.33,19 8,18.33 8,17.5C8,16.67 7.33,16 6.5,16C5.67,16 5,16.67 5,17.5C5,18.33 5.67,19 6.5,19M18.92,9L21,15V23C21,23.55 20.55,24 20,24H19C18.45,24 18,23.55 18,23V22H6V23C6,23.55 5.55,24 5,24H4C3.45,24 3,23.55 3,23V15L5.08,9C5.28,8.42 5.85,8 6.5,8H17.5C18.15,8 18.72,8.42 18.92,9M12,0C14.12,0 16.15,0.86 17.65,2.35L16.23,3.77C15.11,2.65 13.58,2 12,2C10.42,2 8.89,2.65 7.77,3.77L6.36,2.35C7.85,0.86 9.88,0 12,0M12,4C13.06,4 14.07,4.44 14.82,5.18L13.4,6.6C13.03,6.23 12.53,6 12,6C11.5,6 10.97,6.23 10.6,6.6L9.18,5.18C9.93,4.44 10.94,4 12,4Z' />
  </Svg>
)

CarConnectedIcon.displayName = 'CarConnectedIcon'

CarConnectedIcon.defaultProps = {
  size: 24
}

export default CarConnectedIcon