import React from 'react';
import SendMsgForm from '../../components/SendMsgForm/SendMsgForm';

const SendMsgView = (props) => {
  return (
    <div>
      <SendMsgForm
        {...props}
      />
    </div>
  );
};

export default SendMsgView;