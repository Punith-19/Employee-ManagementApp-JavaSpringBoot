export interface Environment{
    production: boolean;
    apiBaseUrl: string;
}
export const environment: Environment= {
    production: false,
    apiBaseUrl: 'http://localhost:8080',
};
