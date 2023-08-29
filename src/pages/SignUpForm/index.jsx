import React, { useState } from 'react';
import { CustomModal } from '../../components/Modal/Modal';
import useFormValidation from '../../hooks/useFormValidation';

export const SignUpForm = () => {
  const { formData, errors, handleChange, handleCheckboxChange, isFormValid, resetFormData } = useFormValidation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log('Form valid:', formData);
      setIsModalOpen(true);
      resetFormData();
    } else {
      console.log(errors)
      console.log('Form invalid');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="container flex flex-col items-center p-4 mx-auto my-20 justify-items-center">
      <h1 className="mb-4 text-2xl font-bold">Sign Up</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-3 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="name">
              Name
            </label>
            <input 
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white" 
              type="text" 
              placeholder="Name" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange} 
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}

          </div>
          <div className="w-full px-3 md:w-1/2">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="lastName">
              Last Name
            </label>
            <input 
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
              type="text" 
              placeholder="Last name" 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange} 
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
          </div>
        </div>
        <div className="flex flex-wrap mb-3 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="email">
             Email
            </label>
            <input 
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}

          </div>
        </div>
        <div className="flex flex-wrap mb-3 -mx-3">
          <div className="w-full px-3 mb-3 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="age">
              Age
            </label>
            <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
            type="number" 
            placeholder="Age" 
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange} 
          />
            {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age}</p>}
          </div>
          <div className="w-full px-3 mb-3 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="type">
              What are you?
            </label>
            <div className="relative">
              <select 
                className="block w-full px-4 py-3 pr-8 leading-tight bg-gray-200 border rounded appearance-none border-gray-200text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500" 
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Choose an option</option>
                <option value="Alien">Alien</option>
                <option value="Human">Human</option>
                <option value="Robot">Robot</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
              {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type}</p>}
            </div>
          </div>
         
        </div>
        <div className="flex flex-wrap mb-3 -mx-3">
          
          <div className="w-full px-3 mb-3 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="gender">
              Gender
            </label>
            <div className="relative">
              <select 
                className="block w-full px-4 py-3 pr-8 leading-tight bg-gray-200 border rounded appearance-none border-gray-200text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500" 
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Choose an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
              {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}

            </div>
          </div>
          <div className="w-full px-3 mb-3 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="planet">
              Where are you from?
            </label>
            <div className="relative">
              <select 
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                id="planet"
                name="planet"
                value={formData.planet}
                onChange={handleChange}
              >
                <option value="">Choose an option</option>
                <option value="Earth">Earth</option>
                <option value="Tatooine">Tatooine</option>
                <option value="Coruscant">Coruscant</option>
                <option value="Naboo">Naboo</option>
                <option value="Mustafar">Mustafar</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
              {errors.planet && <p className="mt-1 text-xs text-red-500">{errors.planet}</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mb-3 -mx-3">
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="faction">
              Choose your Faction
            </label>
            <div className="relative">
              <select 
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
                id="faction"
                name="faction"
                value={formData.faction}
                onChange={handleChange}
              >
                <option value="">Choose an option</option>
                <option value="Jedi Order">Jedi Order</option>
                <option value="Sith Order">Sith Order</option>
                <option value="Galactic Republic">Galactic Republic</option>
                <option value="Galactic Empire">Galactic Empire</option>
                <option value="Rebel Alliance">Rebel Alliance</option>
                <option value="New Republic">New Republic</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
              {errors.faction && <p className="mt-1 text-xs text-red-500">{errors.faction}</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mb-3 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="password">
              Password
            </label>
            <input 
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
              type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
          {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}

          </div>
        </div>
        <div className="flex flex-wrap mb-3 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700" htmlFor="confirmPassword">
              Confirmed Password
            </label>
            <input 
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" 
              type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            />
          {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}

          </div>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="text-sm font-bold text-gray-700" htmlFor="terms">
            Acept terms and conditions
          </label>
          {errors.terms && <p className="ml-2 text-xs text-red-500">{errors.terms}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
        </div>
  
      </form>
      <CustomModal isOpen={isModalOpen} formInfo={formData} onClose={closeModal} />
    </div>
  )
}
