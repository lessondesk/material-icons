import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BacteriaOutlineIcon = ({
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
    <path d='M9,2H7V4.1C6.29,4.25 5.73,4.54 5.32,4.91L2.7,2.29L1.29,3.71L4.24,6.65C4,7.39 4,8 4,8H2V10H4.04C4.1,10.63 4.21,11.36 4.4,12.15L1.68,13.05L2.31,14.95L5,14.05C5.24,14.56 5.5,15.08 5.82,15.58L3.44,17.17L4.55,18.83L7.07,17.15C7.63,17.71 8.29,18.21 9.06,18.64L8.1,20.55L9.89,21.45L10.89,19.45L10.73,19.36C11.68,19.68 12.76,19.9 14,19.97V22H16V19.93C16.76,19.84 17.81,19.64 18.77,19.19L20.29,20.71L21.7,19.29L20.37,17.95C20.75,17.44 21,16.8 21,16C21,15.5 20.95,15.08 20.88,14.68L22.45,13.9L21.55,12.1L20.18,12.79C19.63,11.96 18.91,11.5 18.29,11.28L18.95,9.32L17.05,8.68L16.29,10.96C14.96,10.83 14.17,10.32 13.7,9.77L15.45,8.9L14.55,7.1L13,7.89C12.97,7.59 12.86,6.72 12.28,5.87L13.83,3.55L12.17,2.44L10.76,4.56C10.28,4.33 9.7,4.15 9,4.06M15,18C12.06,18 9.81,17.18 8.31,15.56C5.68,12.72 6,8.2 6,8.17V8.11L6,8.03C6,7.1 6.39,6 8,6C10.63,6 10.97,7.43 11,8C11,10 12.6,13 17,13C17.33,13 19,13.15 19,16C19,17.89 15.03,18 15,18M8.5,8C7.67,8 7,8.67 7,9.5C7,10.33 7.67,11 8.5,11C9.33,11 10,10.33 10,9.5C10,8.67 9.33,8 8.5,8M11,12C10.45,12 10,12.45 10,13C10,13.55 10.45,14 11,14C11.55,14 12,13.55 12,13C12,12.45 11.55,12 11,12M15.5,14C14.67,14 14,14.67 14,15.5C14,16.33 14.67,17 15.5,17C16.33,17 17,16.33 17,15.5C17,14.67 16.33,14 15.5,14Z' />
  </Svg>
)

BacteriaOutlineIcon.displayName = 'BacteriaOutlineIcon'

BacteriaOutlineIcon.defaultProps = {
  size: 24
}

export default BacteriaOutlineIcon