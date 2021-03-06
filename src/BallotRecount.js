import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BallotRecountIcon = ({
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
    <path d='M19,12V13.5C21.21,13.5 23,15.29 23,17.5C23,18.32 22.75,19.08 22.33,19.71L21.24,18.62C21.41,18.28 21.5,17.9 21.5,17.5C21.5,16.12 20.38,15 19,15V16.5L16.75,14.25L19,12M19,23V21.5C16.79,21.5 15,19.71 15,17.5C15,16.68 15.25,15.92 15.67,15.29L16.76,16.38C16.59,16.72 16.5,17.1 16.5,17.5C16.5,18.88 17.62,20 19,20V18.5L21.25,20.75L19,23M10,17H7V14H10V17M10,7V10H7V7H10M5,21C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V11.17C20.5,11.06 20,11 19.5,11C15.91,11 13,13.91 13,17.5C13,18.79 13.38,20 14,21H5M13,9.5H18V7.5H13V9.5M11,13H6V18H11V13M11,6H6V11H11V6Z' />
  </Svg>
)

BallotRecountIcon.displayName = 'BallotRecountIcon'

BallotRecountIcon.defaultProps = {
  size: 24
}

export default BallotRecountIcon