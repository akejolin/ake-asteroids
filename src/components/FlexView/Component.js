import React from 'react'
import PropTypes from 'prop-types'

/**
 * A FlexView component will output a div with preset styles of flex display.
 */
export class FlexView extends React.Component {
  render() {
    const styles = {
      default: {
        height: '100%',
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: this.props.row ? 'row': 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }

    let outputStyles = {
      ...styles.default,
      ...this.props.style,
    }

    if (outputStyles.width === '100%') {
      outputStyles = {
        ...outputStyles,
        ...{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        },
      }
    }
    if (outputStyles.height === '100%') {
      outputStyles = {
        ...outputStyles,
        ...{
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        },
      }
    }
    const TagName = this.props.tagName
    let setProps = {...this.props}
    setProps.style = outputStyles
    delete setProps.row
    delete setProps.tagName
    
    return (
      <TagName {...setProps}>
        {this.props.children}
      </TagName>
    )
  }
}
FlexView.defaultProps = {
  style: {},
  row: false,
  tagName: 'div',
}
FlexView.propTypes = {
  /**
  * The content of the component
  */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Override or extend the default styles.
   */
  style: PropTypes.object,
  /**
   * Shortcut to set the flexDirection style property
   */
  row: PropTypes.bool,
  /**
   * Type of elemenet to output, ex div, section, header, span, etc.
   */
  tagName: PropTypes.string,
}

export default FlexView