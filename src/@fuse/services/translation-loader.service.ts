import { Injectable } from '@angular/core';

export interface Locale
{
    lang: string;
    data: Object;
}

@Injectable({
    providedIn: 'root'
})
export class FuseTranslationLoaderService
{

    constructor(
    )
    {
    }


}
