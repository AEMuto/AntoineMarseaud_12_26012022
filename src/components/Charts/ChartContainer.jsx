import styled from 'styled-components'
import { colors } from '../../theme/colors'
import PropTypes from 'prop-types'

function ChartContainer({
  area,
  bgColor,
  borderRadius,
  children,
  title,
  titleColor,
}) {
  return (
    <StyledChartContainer
      area={area}
      bgColor={bgColor}
      borderRadius={borderRadius}
    >
      <ChartTitle titleColor={titleColor}>{title}</ChartTitle>
      {children}
    </StyledChartContainer>
  )
}

ChartContainer.propTypes = {
  area: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

export default ChartContainer

const StyledChartContainer = styled.div.attrs((props) => ({
  bgColor: props.bgColor || colors.grey1,
  borderRadius: props.borderRadius || 0,
}))`
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.area};
  min-width: 0;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  position: relative;
`
const ChartTitle = styled.h3.attrs((props) => ({
  titleColor: props.titleColor || colors.black,
}))`
  position: absolute;
  color: ${({ titleColor }) => titleColor};
  top: 30px;
  left: 30px;
  font-weight: 500;
  font-size: 1rem;
  max-width: 150px;
`
