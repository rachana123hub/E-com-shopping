import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { AuthInterceptor } from './auth.interceptor';

export const HttpInterceptProviders = [
    {
        provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
    },
    {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
]