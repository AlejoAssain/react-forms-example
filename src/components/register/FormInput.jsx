import React from 'react';
import { useField } from 'formik';

const FormInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <div>
      <label>{ label }
        <input { ...field } { ...props } />
      </label>

      {/* errors */}
      {meta.touched && meta.error ? (
        <div className="form-error">{ meta.error }</div>
      ) : null}

    </div>
  );
}

export default FormInput;
