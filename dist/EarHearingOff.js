import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EarHearingOffIcon = ({
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
    <path d='M1,4.27L2.28,3L20,20.72L18.73,22L12.91,16.18C12.19,16.74 11.67,17.19 11.37,18.1C10.77,19.92 10,20.94 8.64,21.65C8.13,21.88 7.57,22 7,22C4.79,22 3,20.21 3,18H5C5,19.1 5.9,20 7,20C7.29,20 7.56,19.94 7.76,19.85C8.47,19.5 8.97,18.97 9.47,17.47C9.91,16.12 10.69,15.39 11.5,14.76L5.04,8.31C5,8.54 5,8.77 5,9H3C3,8.17 3.14,7.39 3.39,6.66L1,4.27M14.18,11.94C14.71,11 15,9.93 15,9C15,6.2 12.8,4 10,4C8.81,4 7.74,4.39 6.89,5.06L5.46,3.63C6.67,2.61 8.25,2 10,2C13.93,2 17,5.07 17,9C17,10.26 16.62,11.65 15.93,12.9L15.47,13.65L14.03,12.2L14.18,11.94M16.36,2.64L17.78,1.22C19.77,3.21 21,5.96 21,9C21,11.83 19.93,14.41 18.18,16.36L16.77,14.94C18.15,13.36 19,11.28 19,9C19,6.5 18,4.26 16.36,2.64M12.5,9C12.5,9.5 12.36,9.93 12.13,10.31L8.69,6.87C9.07,6.64 9.5,6.5 10,6.5C11.38,6.5 12.5,7.62 12.5,9Z' />
  </Svg>
)

EarHearingOffIcon.displayName = 'EarHearingOffIcon'

EarHearingOffIcon.defaultProps = {
  size: 24
}

export default EarHearingOffIcon