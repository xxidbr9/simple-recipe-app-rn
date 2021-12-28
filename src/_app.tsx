import React from 'react';
import moment from 'moment';
import RootNavigation from '@screens/index';

const DefaultApp = () => {
  moment.locale("id")
  return (
    <RootNavigation />
  )
}


export default DefaultApp
