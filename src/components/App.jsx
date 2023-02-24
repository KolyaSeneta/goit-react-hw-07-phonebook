


import {Contacts} from './Contacts/Contacts'
import { Filter } from './Filter/Filter'
import ContactDelete from './ContatctList/ContactList'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from '../components/redux/contactsRedux/contactsThunk';

export const  App = () => {
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);


      
      return (
        <div>

          <Contacts  />
        
          <h2>Contacts</h2>
         <Filter  />
        <ContactDelete
         
          
        />
        </div>
      );

    
    }
  

  