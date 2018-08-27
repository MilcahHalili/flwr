import React from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';

const LogInView = (props) => {
  return (
    <div>
      <LogInForm
        {...props}
      />
    </div>
  );
};

export default LogInView;