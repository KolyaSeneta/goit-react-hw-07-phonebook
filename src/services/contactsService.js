import axios from 'axios';


export const contactsService = axios.create({
    baseURL:"https://63f76947e40e087c958e1f12.mockapi.io/"
})



export const getContacts = async () => {
    const { data } = await contactsService.get("contacts/");
    return data
}

export const addContacts = async contact => {
    const { data } = await contactsService.post('contacts/', contact);
    return data
}

export const deleteContacts = async (id) => {
    const { data } = await contactsService.delete(`contacts/${id}`);
    return data
}