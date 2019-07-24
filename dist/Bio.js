import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BioIcon = ({
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
    <path d='M17,12H20C21.1,12 22,12.9 22,14V17C22,18.1 21.1,19 20,19H17C15.9,19 15,18.1 15,17V14C15,12.9 15.9,12 17,12M17,14V17H20V14H17M2,7H7C8.1,7 9,7.9 9,9V11C9,12.1 8.1,13 7,13C8.1,13 9,13.9 9,15V17C9,18.1 8.1,19 7,19H2V13L2,7M4,9V12H7V9H4M4,17H7V14H4V17M11,13H13V19H11V13M11,9H13V11H11V9Z' />
  </Svg>
)

BioIcon.displayName = 'BioIcon'

BioIcon.defaultProps = {
  size: 24
}

export default BioIcon