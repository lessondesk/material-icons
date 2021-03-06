import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WeightGramIcon = ({
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
    <path d='M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7C16,4.79 14.21,3 12,3C9.79,3 8,4.79 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5C13.1,5 14,5.9 14,7C14,8.1 13.1,9 12,9C10.9,9 10,8.1 10,7C10,5.9 10.9,5 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z' />
  </Svg>
)

WeightGramIcon.displayName = 'WeightGramIcon'

WeightGramIcon.defaultProps = {
  size: 24
}

export default WeightGramIcon