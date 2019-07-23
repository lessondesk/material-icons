import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BookMultipleRemoveIcon = ({
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
    <path d='M9,2C7.9,2 7,2.9 7,4V16C7,17.1 7.9,18 9,18H19C20.1,18 21,17.1 21,16V4C21,2.9 20.1,2 19,2H14V7L12,5.5L10,7V2H9M3,6V20C3,21.1 3.9,22 5,22H17V20H5V6H3M14.59,10.17L16,11.59L17.41,10.17L18.83,11.59L17.41,13L18.83,14.41L17.41,15.83L16,14.41L14.59,15.83L13.17,14.41L14.59,13L13.17,11.59L14.59,10.17Z' />
  </Svg>
)

BookMultipleRemoveIcon.displayName = 'BookMultipleRemoveIcon'

BookMultipleRemoveIcon.defaultProps = {
  size: 24
}

export default BookMultipleRemoveIcon