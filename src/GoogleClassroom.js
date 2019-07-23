import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoogleClassroomIcon = ({
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
    <path d='M23,2H1C0.45,2 0,2.45 0,3V21C0,21.55 0.45,22 1,22H23C23.55,22 24,21.55 24,21V3C24,2.45 23.55,2 23,2M22,20H20V19H15V20H2V4H22V20M10.29,9.71C10.29,8.77 11.06,8 12,8C12.95,8 13.71,8.77 13.71,9.71C13.71,10.66 12.95,11.43 12,11.43C11.05,11.43 10.29,10.66 10.29,9.71M5.71,11.29C5.71,10.58 6.29,10 7,10C7.71,10 8.29,10.58 8.29,11.29C8.29,12 7.71,12.57 7,12.57C6.29,12.57 5.71,12 5.71,11.29M15.71,11.29C15.71,10.58 16.29,10 17,10C17.71,10 18.29,10.58 18.29,11.29C18.29,12 17.71,12.57 17,12.57C16.29,12.57 15.71,12 15.71,11.29M20,15.14V16H16L14,16H10L8,16H4V15.14C4,14.2 5.55,13.43 7,13.43C7.55,13.43 8.11,13.54 8.6,13.73C9.35,13.04 10.7,12.57 12,12.57C13.3,12.57 14.65,13.04 15.4,13.73C15.89,13.54 16.45,13.43 17,13.43C18.45,13.43 20,14.2 20,15.14Z' />
  </Svg>
)

GoogleClassroomIcon.displayName = 'GoogleClassroomIcon'

GoogleClassroomIcon.defaultProps = {
  size: 24
}

export default GoogleClassroomIcon