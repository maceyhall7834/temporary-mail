let currentEmailProvider = 'mailinator'; // Default provider

async function generateEmail(provider) {
    let apiUrl;

    switch (provider) {
        case 'mailinator':
            apiUrl = 'https://api.mailinator.com/generate-email';
            break;
        case 'tempmail':
            apiUrl = 'https://api.tempmail.io/v1/email';
            break;
        case 'guerrilla':
            apiUrl = 'https://api.guerrillamail.com/'; // Adjust according to API
            break;
        case '10minutemail':
            apiUrl = 'https://10minutemail.com/api'; // Adjust according to API
            break;
        case 'throwaway':
            apiUrl = 'https://www.throwawaymail.com/api'; // Adjust accordingly
            break;
        default:
            console.error('Unsupported provider');
            return;
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
        console.error('Failed to fetch email');
        return;
    }
    const data = await response.json();
    return data.email || ''; // Adjust according to API response
}

function updateEmailDisplay(email) {
    document.getElementById('user-email').innerText = email;
}

// Handle provider change
document.getElementById('profile').addEventListener('click', async () => {
    const newEmail = await generateEmail(currentEmailProvider);
    
    if (newEmail) {
        updateEmailDisplay(newEmail);
    }
});

// Dropdown to change providers (optional)
document.getElementById('provider-dropdown').addEventListener('change', (e) => {
    currentEmailProvider = e.target.value;
});
