import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BulletinBoardIcon = ({
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
    <path d='M12.04,2.5L9.53,5H14.53L12.04,2.5M4,7V20H20V7H4M12,0L17,5V5H20C21.1,5 22,5.9 22,7V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V7C2,5.9 2.9,5 4,5H7V5L12,0M7,18V14H12V18H7M14,17V10H18V17H14M6,12V9H11V12H6Z' />
  </Svg>
)

BulletinBoardIcon.displayName = 'BulletinBoardIcon'

BulletinBoardIcon.defaultProps = {
  size: 24
}

export default BulletinBoardIcon