import { Config } from '../definitions/config'
import jss from 'jss'
const color = require('color')
// @ts-ignore
import camelCase from 'jss-camel-case'
// @ts-ignore
import nested from 'jss-nested'
// @ts-ignore
import increaseSpecificity from 'jss-increase-specificity'

// @ts-ignore
jss.use(camelCase(), nested(), increaseSpecificity())

export default (config: Config) => {
  const styles = {
    'toggle': {
      zIndex: '2147483000 !important',
      position: 'fixed !important',
      [config.position[0]]: '20px !important',
      [config.position[1]]: '20px !important',
      width: `56px !important`,
      height: `56px !important`,
      borderRadius: '50% !important',
      transition: [
        'box-shadow .2s ease-in-out',
        `background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
        'filter .2s ease-in-out',
        'opacity .1s ease',
        'transform .2s ease !important',
      ],
      boxShadow: [
        '0px 3px 5px -1px rgba(0, 0, 0, 0.2)',
        '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
        '0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
      ],
      background: `${config.color} !important`,
      cursor: 'pointer !important',
      animationTimingFunction: 'ease-in-out !important',
      '&:hover': {
        boxShadow: [
          '0px 3px 5px -1px rgba(0, 0, 0, 0.2)',
          '0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
          '0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
        ],
        background: `${color(config.color).lighten(0.1)} !important`,
      },
      '&-entering': {
        opacity: 0,
        transform: 'scale(0.4)'
      },
      '&-entered': {
        opacity: 1,
        transform: 'initial'
      }
    },
    'toggle-pinged': {
      boxShadow: [
        '0 1px 6px rgba(0,0,0,0.06)',
        '0 2px 32px rgba(0,0,0,0.16)',
        `0 0 0 0 ${color(config.color).alpha(0.7).rgb().toString()}`,
        '!important'
      ],
      animation: 'pingedPulse 1.2s infinite cubic-bezier(0.18, 0.89, 0.6, 1.28) !important',
    },


    'button-glyph': {
      display: 'block !important',
      position: 'absolute !important',
      top: '0 !important',
      bottom: '0 !important',
      height: '100% !important',
      width: '100% !important',
      transition: 'transform .16s linear, opacity .08s linear !important',
      backgroundSize: '50% 50% !important',
      backgroundPosition: 'center !important',
      backgroundRepeat: 'no-repeat !important',
      pointerEvents: 'none !important',
      borderRadius: '50% !important'
    },
    'button-open': {
      backgroundImage: `url(${JSON.stringify(config.icon)}) !important`,
      backgroundSize: `${config.size} !important`,
    },
    'button-open:toggled': {
      opacity: '1 !important',
      transform: 'rotate(30deg) scale(0) !important',
    },
    'button-close': {
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 50"><path d="M49 45.71l-3.55 3.571-20.6-20.713L3.54 49.997l-3.55-3.572L21.3 24.997-.01 3.57 3.54-.002l21.31 21.427L45.45.713 49 4.284 28.4 24.997" fill="#fff"/></svg>') !important`,
      backgroundPosition: '50% !important',
      backgroundSize: '14px 14px !important',
      backgroundRepeat: 'no-repeat !important',
      opacity: '0 !important',
      transform: 'rotate(-30deg) !important',
      filter: color(config.color).luminosity() > 0.6 ? 'invert(1)' : '',
    },
    'button-close:toggled': {
      opacity: '1 !important',
      transform: 'rotate(0deg) !important',
    },


    'indicator': {
      display: 'block !important',
      width: '20px !important',
      height: '20px !important',
      background: '#FB576A !important',
      borderRadius: '100% !important',
      top: '-2px !important',
      position: 'absolute !important',
      right: '-2px !important',
      lineHeight: '20px !important',
      color: '#fff !important',
      fontSize: '11px !important',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.16) !important',
      transition: 'opacity .1s ease !important',
      fontFamily: `'Roboto', sans-serif !important`,
      pointerEvents: 'none !important',
      textAlign: 'center !important',
      '&:empty': {
        opacity: '0 !important',
      }
    },
    'indicator-pinged': {
      backgroundColor: '#f5c351 !important',
      color: '#000 !important'
    },


    '@keyframes pingedPulse': {
      to: {
        boxShadow: [
          '0 1px 3px rgba(0,0,0,0.2)',
          '0 2px 10px rgba(0,0,0,0.16)',
          `0 0 0 20px ${color(config.color).alpha(0).rgb().toString()}`
        ]
      }
    },
  }
  return jss.createStyleSheet(styles).attach().classes
}
