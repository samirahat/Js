const user = {
    id: 5002,
    name: 'Abdus Sami Rahat',
    address: {
        street: {
            first: 'Shibgonj, Sonarpara, Sylhet',
            secound: 'Nobaron=385',
            third: '4th floor',
            fourth: 'right side'
        }
    }
};
const result = user.address.street ? .secound;
console.log(result);