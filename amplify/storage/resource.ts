import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'amplifyTeamDrive',
    access: (allow) => ({
        '**/*': [
            allow.authenticated.to(['read', 'write']),
            allow.guest.to(['read', 'write'])
        ],
    })
});