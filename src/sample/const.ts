import { AlertBem } from './type';

export const alertBem: AlertBem = {
	alert: {
		modifiers: new Set(['msg', 'card', 'hasCloser', 'default', 'error', 'info', 'warning', 'success', 'variant']),
		elements: {
			container: { modifiers: null },
			'container-content': { modifiers: null },
			'container-heading': { modifiers: new Set(['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']) },
			'close-button': { modifiers: new Set(['close']) },
			content: { modifiers: null },
			heading: { modifiers: null },
		},
	},
};
