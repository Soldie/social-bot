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
    'toast-box': {
      zIndex: '2147483000 !important',
      position: 'fixed !important',
      [config.position[0]]: '80px !important',
      [config.position[1]]: '0 !important',
      [`padding-${config.position[1]}`]: '20px !important',
      width: '300px !important',
      maxHeight: `${config.notifications.toasts.maxHeight} !important`,
      overflow: 'hidden',
      display: 'flex !important',
      opacity: '1 !important',
      padding: '7px 0', // To prevent shadows from being cut
      [`padding-${config.position[0]}`]: '20px !important',
      flexDirection: 'column-reverse !important',
      transition: 'opacity 0.4s ease,transform 0.2s cubic-bezier(0.47, 0, 0.75, 0.72)',
      transform: 'initial !important',
      pointerEvents: 'none'
    },

    'toast': {
      display: 'block !important',
      flex: '1 0 100% !important',
      textAlign: `left !important`,
      transition: 'all 0.5s cubic-bezier(0, 0.8, 0.25, 1.18) !important',
      '& a': {
        color: '#1296CF',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
    },
    'toast-hidden': {
      opacity: '0 !important',
      transform: `translate(${config.position[1] === 'left' ? '-20px' : '20px'}) !important`,
    },
    'toast-visible': {
      opacity: '1 !important',
      transform: 'initial !important',
    },

    'toast-avatar': {
      height: '35px !important',
      width: '35px !important',
      margin: config.position[1] === 'right' ? '6px 0 0 15px !important' : '6px 15px 0 0 !important',
      float: `${config.position[1]} !important`,
      borderRadius: '100%',
      pointerEvents: 'initial',
      cursor: 'pointer'
    },
    'toast-message': {
      maxWidth: 'calc(100% - 100px)',
      // https://stackoverflow.com/questions/30637358
      transform: 'translate3d(0, 0, 0)',
      backgroundColor: `${config.scheme === 'dark' ? '#36393E' : '#FFFFFF'}`,
      display: 'flex',
      flexDirection: 'column',
      color: `${config.scheme === 'dark' ? 'rgba(255,255,255,0.7)' : '#6e7a89'}`,
      marginTop: '6px',
      overflowWrap: 'break-word',
      MsWordBreak: 'break-all',
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      lineHeight: '18px',
      whiteSpace: 'pre-wrap',
      WebkitBoxShadow: '0 2px 8px 0 rgba(35,47,53,0.09)',
      boxShadow: '0 2px 8px 0 rgba(35,47,53,0.5)',
      position: 'relative',
      borderTopLeftRadius: config.position[1] === 'right' ? '6px' : '0',
      borderTopRightRadius: config.position[1] === 'left' ? '6px' : '0',
      borderBottomLeftRadius: '6px',
      borderBottomRightRadius: '6px',
      float: `${config.position[1]}`,
      pointerEvents: 'initial',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '0',
        [config.position[1]]: '-10px',
        borderWidth: config.position[1] === 'right' ? '10px 10px 0 0' : '10px 0 0 10px',
        borderStyle: 'solid',
        borderColor: `${config.scheme === 'dark' ?  '#36393E' : '#FFFFFF'} transparent`,
        display: 'block',
        width: '0',
      },
    },
    'toast-content': {
      fontFamily: `'Roboto', sans-serif`,
      fontSize: '14px',
      padding: '10px 30px 10px 16px',
      userSelect: 'text',
      '& *': {
        userSelect: 'text',
      }
    },
    'toast-actions': {
      width: '100%',
      textAlign: 'right',
      position: 'absolute',
      pointerEvents: 'none',
      '& svg': {
        opacity: 0.4,
        cursor: 'pointer',
        pointerEvents: 'initial',
        width: '17px',
        height: '17px',
        margin: '8px 4px',
        fill: config.scheme === 'dark' ? 'rgba(255,255,255,0.7)' : '#6e7a89',
        padding: '3px',
        borderRadius: '50%',
        boxSizing: 'content-box',
        transition: 'opacity 0.2s ease, background-color 0.2s ease',
        '&:hover': {
          opacity: 0.8,
          backgroundColor: config.scheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      }
    }
  }

  return jss.createStyleSheet(styles).attach().classes
}
