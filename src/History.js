import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HistoryIcon = ({
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
    <path d='M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3C8.03,3 4,7.03 4,12H1L4.96,16.03L9,12H6C6,8.13 9.13,5 13,5C16.87,5 20,8.13 20,12C20,15.87 16.87,19 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21C17.97,21 22,16.97 22,12C22,7.03 17.97,3 13,3' />
  </Svg>
)

HistoryIcon.displayName = 'HistoryIcon'

HistoryIcon.defaultProps = {
  size: 24
}

export default HistoryIcon