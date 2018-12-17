import React from 'react';
import styles from './FormBody.module.scss';
import classNames from 'classnames/bind';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const cx = classNames.bind(styles);

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateFacebook(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateTwitter(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const FormBody = () => (
  <div className={cx('form-body')}>
    <h2>form</h2>
    <Formik
      initialValues={{
        email: '',
        social: {
          facebook: '',
          twitter: '',
        },
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Field type="email" name="email" validate={validateEmail} />
          <ErrorMessage name="email" className="error" component="div" />
          <Field
            type="text"
            name="social.facebook"
            validate={validateFacebook}
          />
          <ErrorMessage
            name="social.facebook"
            className="error"
            component="div"
          />
          <Field type="text" name="social.twitter" validate={validateTwitter} />
          <ErrorMessage
            name="social.twitter"
            className="error"
            component="div"
          />
          {status && status.msg && <div>{status.msg}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <pre
            style={{
              background: '#f6f8fa',
              fontSize: '.65rem',
              padding: '.5rem',
            }}
          >
            <strong>props</strong> ={' '}
            {JSON.stringify({ errors, status, touched, isSubmitting }, null, 2)}
          </pre>
        </Form>
      )}
    />
  </div>
);

export default FormBody;
