import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'cadastro-gerais',
        title    : 'Cadastro Gerais',
        type     : 'collapsable',
        children : [
            {
                id       : 'membros',
                title    : 'Membros',
                type     : 'item',
                url      : '/membros'
            },
            {
                id       : 'parceiros',
                title    : 'Parceiros',
                type     : 'item',
                url      : '/parceiros'
            },
        ]
    }
];
