import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CardBulletedOffIcon = ({
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
    <path d='M3.35,3.58L20.65,20.87L19.23,22.29L16.94,20H4C2.9,20 2,19.1 2,18V6C2,5.72 2.06,5.46 2.16,5.22L1.23,4.29L2.65,2.87L3.35,3.58M6.6,4H20C21.1,4 22,4.9 22,6V18C22,18.4 21.88,18.77 21.68,19.08L17.6,15H20V13H15.6L13.6,11H20V9H11.6L6.6,4M9.94,13H9V15H11V14.06L9.94,13M5.94,9H5V11H7V10.06L5.94,9Z' />
  </Svg>
)

CardBulletedOffIcon.displayName = 'CardBulletedOffIcon'

CardBulletedOffIcon.defaultProps = {
  size: 24
}

export default CardBulletedOffIcon