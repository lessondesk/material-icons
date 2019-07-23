import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BriefcaseRemoveIcon = ({
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
    <path d='M14.46,15.88L15.88,14.46L18,16.59L20.12,14.46L21.54,15.88L19.41,18L21.54,20.12L20.12,21.54L18,19.41L15.88,21.54L14.46,20.12L16.59,18L14.46,15.88M10,2H14C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8V13.53C20.94,12.58 19.54,12 18,12C14.69,12 12,14.69 12,18C12,19.09 12.29,20.12 12.8,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z' />
  </Svg>
)

BriefcaseRemoveIcon.displayName = 'BriefcaseRemoveIcon'

BriefcaseRemoveIcon.defaultProps = {
  size: 24
}

export default BriefcaseRemoveIcon