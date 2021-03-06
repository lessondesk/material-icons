import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BinocularsIcon = ({
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
    <path d='M11,6H13V13H11V6M9,20C9,20.55 8.55,21 8,21H5C4.45,21 4,20.55 4,20V15L6,6H10V13C10,13.55 9.55,14 9,14V20M10,5H7V3H10V5M15,20V14C14.45,14 14,13.55 14,13V6H18L20,15V20C20,20.55 19.55,21 19,21H16C15.45,21 15,20.55 15,20M14,5V3H17V5H14Z' />
  </Svg>
)

BinocularsIcon.displayName = 'BinocularsIcon'

BinocularsIcon.defaultProps = {
  size: 24
}

export default BinocularsIcon