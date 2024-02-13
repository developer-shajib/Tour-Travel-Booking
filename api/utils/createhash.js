import bcrypt from 'bcryptjs';

// Create Hash password
export const createHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

// Check password
export const checkPassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};
