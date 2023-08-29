import { useState } from 'react';
import { singUpForm } from '../utils/singUpForm';

const useFormValidation = () => {
  const [errors, setErrors] = useState({});
  const form = singUpForm()
  const [formData, setFormData] = useState(form);

  const validateField = (fieldName, value) => {
    let error = '';

    switch (fieldName) {
      case 'name':
      case 'lastName':
      case 'type':
      case 'faction':
      case 'planet':
      case 'gender':
      case 'age':
        if (!value.trim()) {
          error = 'This is a required field';
        }
        break;
    case 'email':
        if (!value) {
            error = 'This is a required field';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            error = 'This is not a valid email';
        }
        break;
      case 'password':
        if (!value) {
            error = 'This is a required field';
        } else if (value.length < 8) {
            error = 'Password must be at least 8 characters long';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            error = 'Password must contain at least 1 special character';
        }
        break;
      case 'terms':
        if(value === false) {
            error = 'Accept the terms and conditions';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'This is a required field';
        } else if (value !== formData.password) {
          error = 'Password does not match';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: !prevData[name],
    }));
  };

  const isFormValid = () => {
    const fieldErrors = {};

    for (const fieldName in formData) {
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        fieldErrors[fieldName] = error;
      }
    }

    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  const resetFormData = () => {
    setFormData(form);
  };

  return { formData, errors, handleChange, handleCheckboxChange, isFormValid, resetFormData };
};

export default useFormValidation;
