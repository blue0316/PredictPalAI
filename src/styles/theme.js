import {createGlobalStyle} from 'styled-components';
import theme from 'styled-theming';

export default createGlobalStyle`
  :root {
    --body: ${theme('theme', {
      light: 'var(--body-light)',
      dark: 'var(--body-dark)',
    })};
    --widget: ${theme('theme', {
      light: 'var(--widget-light)',
      dark: 'var(--widget-dark)',
    })};
    --widget-shadow: ${theme('theme', {
      light: '0 1px 8px rgba(110, 110, 110, .1)',
      dark: '0 1px 8px rgba(33, 33, 33, .1)',
    })};
    --winget-inner-shadow: ${theme('theme', {
      light: 'linear-gradient(270deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)',
      dark: 'linear-gradient(270deg, rgba(17, 19, 18, 0.0001) 0%, #111312 100%)',
    })};
    --text: ${theme('theme', {
      light: 'var(--text-light)',
      dark: 'var(--text-dark)',
    })};
    --border: ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'var(--border-dark)',
    })};
    --header: ${theme('theme', {
      light: 'var(--header-light)',
      dark: 'var(--header-dark)',
    })};
    --header-invert: ${theme('theme', {
        light: 'var(--header-dark)',
        dark: 'var(--header-light)',
    })};
    --label: ${theme('theme', {
      light: 'var(--btn-text-light)',
      dark: 'var(--text-dark)',
    })};
    --btn-text: ${theme('theme', {
      light: 'var(--btn-text-light)',
      dark: 'var(--widget-light)',
    })};
    --highlight: ${theme('theme', {
      light: 'var(--olive)',
      dark: 'var(--accent)',
    })};
    --highlight-invert: ${theme('theme', {
        light: 'var(--accent)',
        dark: 'var(--olive)',
    })};
    --tooltip-bg: ${theme('theme', {
        light: 'var(--widget)',
        dark: 'var(--border)',
    })};
    --nav-arrow-color: ${theme('theme', {
        light: 'var(--header)',
        dark: '#8EA2AB',
    })};
    --nav-arrow-hover-color: ${theme('theme', {
        light: 'var(--blue)',
        dark: 'var(--accent)',
    })};
    --divider: ${theme('theme', {
        light: '#ccc',
        dark: '#3e3e3e',
    })};
    --placeholder: ${theme('theme', {
        light: '#8C9876',
        dark: '#999999'
    })};
    --score-alt: ${theme('theme', {
        light: 'var(--border)',
        dark: 'var(--black-3)'
    })};
  }
`;