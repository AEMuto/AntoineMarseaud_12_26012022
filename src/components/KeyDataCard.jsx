import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from './Icon'
import { colors } from '../theme/colors'
import { hexToRGB } from '../utils/hexToRGB'

function KeyDataCard({ value, type }) {
  /**
   * Return an object we use to style correctly the keyData Card.
   * 'subtitle' will be used to display the molecule type.
   * 'color' will define the fill and background color of the icon.
   * 'icon' is the key to the look-up table /assets/icons/icons.jsx which
   * contains all of our icon in svg format.
   * @param type
   * @returns {{color: string, subtitle: string, icon: string}|{color: string, subtitle: string, icon: string, title: number}}
   */
  function parseType(type) {
    switch (type) {
      case 'calorieCount':
        return {
          subtitle: 'Calories',
          color: colors.primary,
          icon: 'fire',
        }
      case 'carbohydrateCount':
        return {
          subtitle: 'Glucides',
          color: colors.yellow,
          icon: 'apple',
        }
      case 'lipidCount':
        return {
          subtitle: 'Lipides',
          color: colors.pink,
          icon: 'burger',
        }
      case 'proteinCount':
        return {
          subtitle: 'Protéines',
          color: colors.blue,
          icon: 'meat',
        }
      default:
        console.log('Molécules Inconnues')
        return {
          title: 0,
          subtitle: 'Molécule Inconnue',
          color: colors.grey4,
          icon: 'molecule',
        }
    }
  }

  const { subtitle, color, icon } = parseType(type)

  return (
    <CardWrapper>
      <Icon
        name={icon}
        fgColor={hexToRGB(color, 1)}
        bgColor={hexToRGB(color, 0.1)}
      />
      <Info>
        <h3>
          {value}
          {subtitle === 'Calories' ? 'kCal' : 'g'}
        </h3>
        <p>{subtitle}</p>
      </Info>
    </CardWrapper>
  )
}

KeyDataCard.propTypes = {
  value: PropTypes.number,
  type: PropTypes.string,
}

export default KeyDataCard

const CardWrapper = styled.div.attrs((props) => ({
  color: props.color || colors.grey1,
  padding: props.padding || '2rem',
}))`
  background-color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  display: flex;
  border-radius: 5px;
  min-width: 258px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.5rem;
  p {
    margin-top: 0.25rem;
  }
`
