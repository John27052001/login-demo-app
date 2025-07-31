// src/utils/validation.test.js

import { validatePhone } from './validation';

test('shows error if phone number does not start with +254', () => {
  expect(validatePhone('0712345678')).toBe('Phone number must start with +254');
});

test('shows error if phone number is incorrect', () => {
  expect(validatePhone('+254700000000')).toBe('Invalid phone number');
});

test('passes for valid phone number', () => {
  expect(validatePhone('+254712345678')).toBe('');
});
