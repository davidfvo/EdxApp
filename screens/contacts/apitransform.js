const transformContacts = contact => ({
    fullName: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone
})

export const randomContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=1000&nat=us')
    const {results} = await response.json()
    return results.map(contact => transformContacts(contact))
}
