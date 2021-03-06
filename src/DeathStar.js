import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DeathStarIcon = ({
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
    <path d='M2.05,13H21.95C21.45,18.05 17.19,22 12,22C6.82,22 2.55,18.05 2.05,13M21.95,11H2.05C2.55,5.95 6.82,2 12,2C17.18,2 21.45,5.95 21.95,11M12,6.75C12,5.37 10.88,4.25 9.5,4.25C8.12,4.25 7,5.37 7,6.75C7,8.13 8.12,9.25 9.5,9.25C10.88,9.25 12,8.13 12,6.75Z' />
  </Svg>
)

DeathStarIcon.displayName = 'DeathStarIcon'

DeathStarIcon.defaultProps = {
  size: 24
}

export default DeathStarIcon