import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChessQueenIcon = ({
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
    <path d='M18,3C19.1,3 20,3.9 20,5C20,5.81 19.5,6.5 18.83,6.82L17,13.15V18H7V13.15L5.17,6.82C4.5,6.5 4,5.81 4,5C4,3.9 4.9,3 6,3C7.1,3 8,3.9 8,5C8,5.5 7.82,5.95 7.5,6.3L10.3,9.35L10.83,5.62C10.33,5.26 10,4.67 10,4C10,2.9 10.9,2 12,2C13.1,2 14,2.9 14,4C14,4.67 13.67,5.26 13.17,5.62L13.7,9.35L16.47,6.29C16.18,5.94 16,5.5 16,5C16,3.9 16.9,3 18,3M5,20H19V22H5V20Z' />
  </Svg>
)

ChessQueenIcon.displayName = 'ChessQueenIcon'

ChessQueenIcon.defaultProps = {
  size: 24
}

export default ChessQueenIcon