import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CheckboxMultipleBlankCircleOutlineIcon = ({
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
    <path d='M14,2C9.58,2 6,5.58 6,10C6,14.42 9.58,18 14,18C18.42,18 22,14.42 22,10C22,5.58 18.42,2 14,2M14,4C17.32,4 20,6.69 20,10C20,13.32 17.32,16 14,16C10.69,16 8,13.31 8,10C8,6.69 10.69,4 14,4M4.93,5.82C3.08,7.34 2,9.61 2,12C2,16.42 5.58,20 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z' />
  </Svg>
)

CheckboxMultipleBlankCircleOutlineIcon.displayName = 'CheckboxMultipleBlankCircleOutlineIcon'

CheckboxMultipleBlankCircleOutlineIcon.defaultProps = {
  size: 24
}

export default CheckboxMultipleBlankCircleOutlineIcon