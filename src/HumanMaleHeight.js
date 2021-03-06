import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HumanMaleHeightIcon = ({
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
    <path d='M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4C5,2.9 5.9,2 7,2M5.5,7H8.5C9.6,7 10.5,7.9 10.5,9V14.5H9V22H5V14.5H3.5V9C3.5,7.9 4.4,7 5.5,7M21,8H15V10H21M21,11H18V13H21M21,2H15V4H21M21,5H18V7H21M21,14H15V16H21M21,20H15V22H21M21,17H18V19H21' />
  </Svg>
)

HumanMaleHeightIcon.displayName = 'HumanMaleHeightIcon'

HumanMaleHeightIcon.defaultProps = {
  size: 24
}

export default HumanMaleHeightIcon