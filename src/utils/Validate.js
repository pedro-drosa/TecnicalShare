import * as yup from 'yup';

class Validate {
  async userValidation(user) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
      occupationArea: yup.string().required(),
      genre: yup.string().required(),
      birth: yup.date().required(),
      biography: yup.string(),
      mentor: yup.boolean().optional(),
      portfolio: yup.string(),
      social: yup.string(),
    });

    if (!(await schema.isValid(user))) {
      return false;
    }

    return true;
  }

  async sessionValidation(email, password) {
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    });

    if (!(await schema.isValid({ email, password }))) {
      return false;
    }

    return true;
  }

  async dateValidation(date) {
    const schema = yup.object().shape({
      date: yup.date().required(),
    });

    if (!(await schema.isValid(date))) {
      return false;
    }

    return true;
  }

  async addressValidation(address) {
    const schema = yup.object().shape({
      zipcode: yup.string().required(),
      uf: yup.string().max(2).min(2).required(),
      city: yup.string().required(),
    });

    if (!(await schema.isValid(address))) {
      return false;
    }

    return true;
  }

  async appointmentValidation(appointment) {
    const schema = yup.object().shape({
      mentorId: yup.number().positive().required(),
      date: yup.date(),
    });

    if (!(await schema.isValid(appointment))) {
      return false;
    }

    return true;
  }
}

export default new Validate();
