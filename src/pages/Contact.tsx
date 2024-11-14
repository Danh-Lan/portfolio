import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const apiKey = import.meta.env.VITE_REACT_APP_WEB3FORMS_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      subject: "New Contact Message from your Portfolio Website",
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: (msg, _data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError: (msg, _data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <div className="max-w-md w-screen mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}>
        </input>

        <div>
          <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type='email'
            id='email'
            className={`w-full px-4 py-3 border-2 dark:text-white rounded-md outline-none dark:bg-gray-900 focus:ring-4 
              ${
                errors.email
                  ? "border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{(errors.email.message as string)}</p>}
        </div>
        <div>
          <label htmlFor='title' className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type='text'
            id='title'
            className={`w-full px-4 py-3 border-2 dark:text-white rounded-md outline-none dark:bg-gray-900 focus:ring-4 
              ${
                errors.title
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register('title', { required: 'Entre your title' })}
          />
          
          {errors.title && <p className="text-red-500 text-sm mt-1">{(errors.title.message as string)}</p>}
        </div>
        <div>
          <label htmlFor='message' className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            id='message'
            className={`w-full px-4 py-3 border-2 dark:text-white dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 
              ${
                errors.message
                  ? "border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register('message', { required: 'Enter your message' })}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{(errors.message.message as string)}</p>}
        </div>
        <div>
          <button 
            type="submit" 
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit message'}
          </button>
        </div>
      </form>
      
      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </div>
  );
};

export default Contact;