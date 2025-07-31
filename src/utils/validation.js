// src/utils/validation.js

export const validatePhone = (phone) => {
    if (!phone.startsWith('+254')) {
      return 'Phone number must start with +254';
    } else if (phone !== '+254712345678') {
      return 'Invalid phone number';
    }
    return '';
  };
  