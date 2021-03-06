import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyRubIcon = ({
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
    <path d='M6,10H7V3H14.5C17,3 19,5 19,7.5C19,10 17,12 14.5,12H9V14H15V16H9V21H7V16H6V14H7V12H6V10M14.5,5H9V10H14.5C15.88,10 17,8.88 17,7.5C17,6.12 15.88,5 14.5,5Z' />
  </Svg>
)

CurrencyRubIcon.displayName = 'CurrencyRubIcon'

CurrencyRubIcon.defaultProps = {
  size: 24
}

export default CurrencyRubIcon