import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BallotOutlineIcon = ({
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
    <path d='M13,7.5H18V9.5H13V7.5M13,14.5H18V16.5H13V14.5M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19M19,19V5H5V19H19M11,6V11H6V6H11M10,10V7H7V10H10M11,13V18H6V13H11M10,17V14H7V17H10Z' />
  </Svg>
)

BallotOutlineIcon.displayName = 'BallotOutlineIcon'

BallotOutlineIcon.defaultProps = {
  size: 24
}

export default BallotOutlineIcon