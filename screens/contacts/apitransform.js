
const transformContacts = contact => ({
    fullName: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
    key: contact.id.value
})

// export const randomContacts = async () => {
//     const response = await fetch('https://randomuser.me/api/?results=100&nat=us&seed=8e2b367c2b8ffb0d')
//     const {results} = await response.json()
//     return results.map(contact => transformContacts(contact))
// }

export const randomContacts = () => {
    let {results} = require('./contacts.json')
    return results.map(contact => transformContacts(contact))
}