import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CartRemoveIcon = ({
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
    <path d='M14.12,8.53L12,6.41L9.88,8.54L8.46,7.12L10.59,5L8.47,2.88L9.88,1.47L12,3.59L14.12,1.46L15.54,2.88L13.41,5L15.53,7.12L14.12,8.53M7,18C8.1,18 9,18.9 9,20C9,21.1 8.1,22 7,22C5.9,22 5,21.1 5,20C5,18.9 5.9,18 7,18M17,18C18.1,18 19,18.9 19,20C19,21.1 18.1,22 17,22C15.9,22 15,21.1 15,20C15,18.9 15.9,18 17,18M7.17,14.75C7.17,14.89 7.28,15 7.42,15H19V17H7C5.9,17 5,16.1 5,15C5,14.65 5.09,14.32 5.25,14.04L6.6,11.59L3,4H1V2H4.27L5.21,4L6.16,6L8.4,10.73L8.53,11H15.55L18.31,6L19.41,4H19.42L21.16,4.96L17.3,11.97C16.96,12.59 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75Z' />
  </Svg>
)

CartRemoveIcon.displayName = 'CartRemoveIcon'

CartRemoveIcon.defaultProps = {
  size: 24
}

export default CartRemoveIcon