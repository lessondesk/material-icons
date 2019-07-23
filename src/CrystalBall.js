import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CrystalBallIcon = ({
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
    <path d='M9.38,8.38L11.5,9.34L13.62,8.38L12.66,10.5L13.62,12.62L11.5,11.66L9.38,12.62L10.34,10.5L9.38,8.38M16.5,2.5L17.59,5.41L20.5,6.5L17.59,7.59L16.5,10.5L15.41,7.59L12.5,6.5L15.41,5.41L16.5,2.5M6,19H7V18C7,17.45 7.45,17 8,17H8.26C6,15.7 4.5,13.28 4.5,10.5C4.5,6.36 7.86,3 12,3C13.05,3 14.05,3.22 14.96,3.61L14.59,4.59L13.17,5.12C12.79,5.04 12.4,5 12,5C8.96,5 6.5,7.46 6.5,10.5C6.5,13.54 8.96,16 12,16C14.91,16 17.3,13.73 17.5,10.87L18.41,8.41L19.12,8.14C19.37,8.88 19.5,9.68 19.5,10.5C19.5,13.28 18,15.7 15.74,17H16C16.55,17 17,17.45 17,18V19H18C19.1,19 20,19.9 20,21V22H4V21C4,19.9 4.9,19 6,19Z' />
  </Svg>
)

CrystalBallIcon.displayName = 'CrystalBallIcon'

CrystalBallIcon.defaultProps = {
  size: 24
}

export default CrystalBallIcon