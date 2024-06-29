// A mock function to mimic making an async request for data
function generateRandomString(minLength: number, maxLength: number): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let string = '';

    for (let i = 0; i < stringLength; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        string += letters[randomIndex];
    }

    return string;
}

export const fetchSample = () => {
    return new Promise<{ data: string }>(resolve =>
        setTimeout(() => resolve({ data: generateRandomString(5, 10) }), 3000),
    )
}
