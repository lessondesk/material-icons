import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BriefcaseEditOutlineIcon = ({
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
    <path d='M21.04,12.13C21.18,12.13 21.31,12.19 21.42,12.3L22.7,13.58C22.92,13.79 22.92,14.14 22.7,14.35L21.7,15.35L19.65,13.3L20.65,12.3C20.76,12.19 20.9,12.13 21.04,12.13M19.07,13.88L21.12,15.93L15.06,22H13V19.94L19.07,13.88M10,2H14C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8L20,10V8H4V19H11V21H4C2.9,21 2,20.1 2,19V8C2,6.9 2.9,6 4,6H8V4C8,2.9 8.9,2 10,2M14,6V4H10V6H14Z' />
  </Svg>
)

BriefcaseEditOutlineIcon.displayName = 'BriefcaseEditOutlineIcon'

BriefcaseEditOutlineIcon.defaultProps = {
  size: 24
}

export default BriefcaseEditOutlineIcon