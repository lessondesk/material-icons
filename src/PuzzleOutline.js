import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PuzzleOutlineIcon = ({
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
    <path d='M22,13.5C22,15.26 20.7,16.72 19,16.96V20C19,21.1 18.1,22 17,22H13.2V21.7C13.2,20.21 11.99,19 10.5,19C9,19 7.8,20.21 7.8,21.7V22H4C2.9,22 2,21.1 2,20V16.2H2.3C3.79,16.2 5,15 5,13.5C5,12 3.79,10.8 2.3,10.8H2V7C2,5.9 2.9,5 4,5H7.04C7.28,3.3 8.74,2 10.5,2C12.26,2 13.72,3.3 13.96,5H17C18.1,5 19,5.9 19,7V10.04C20.7,10.28 22,11.74 22,13.5M17,15H18.5C19.33,15 20,14.33 20,13.5C20,12.67 19.33,12 18.5,12H17V7H12V5.5C12,4.67 11.33,4 10.5,4C9.67,4 9,4.67 9,5.5V7H4V9.12C5.76,9.8 7,11.5 7,13.5C7,15.5 5.75,17.2 4,17.88V20H6.12C6.8,18.25 8.5,17 10.5,17C12.5,17 14.2,18.25 14.88,20H17V15Z' />
  </Svg>
)

PuzzleOutlineIcon.displayName = 'PuzzleOutlineIcon'

PuzzleOutlineIcon.defaultProps = {
  size: 24
}

export default PuzzleOutlineIcon