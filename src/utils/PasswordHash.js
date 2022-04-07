import bcrypt from 'bcryptjs';

class PasswordHash {
  constructor(salt) {
    this.salt = salt || 10;
  }

  async generateHash(password) {
    const hash = await bcrypt.hash(password, this.salt);
    return hash;
  }

  async compareHash(password, hash) {
    const decoded = await bcrypt.compare(password, hash);
    return decoded;
  }
}

export default new PasswordHash();
