import React from 'react';
import AddMsgForm from '../../components/AddMsgForm/AddMsgForm';

const AddMsgView = (props) => {
  return (
    <div>
      <AddMsgForm
        {...props}
      />
    </div>
  );
};

export default AddMsgView;