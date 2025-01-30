import { createServer } from 'miragejs';
import { CresMock } from '@/mocks/cres';

export function makeServer() {
    const server = createServer({
        routes: function () {
            // CREs
            this.get('/api/v1/cres', (schema: any, request) => {
                const allCREs = CresMock;

                return {
                    cres: allCREs,
                };
            });

            //let the rest of the api calls through
            this.passthrough();
        },
    });

    //Save the data in local storage, so it persists between page refreshes
    if (typeof window !== 'undefined') {
        const dbData = localStorage?.getItem('db');
        if (dbData) {
            server.db.emptyData();
            server.db.loadData(JSON.parse(dbData));
        }

        const mirageRequestHandler = server.pretender.handledRequest;
        server.pretender.handledRequest = (verb, path, request) => {
            // linting: there's a mistake in the type of server.db.dump() - it actually returns a copy of the db
            // noinspection JSVoidFunctionReturnValueUsed
            localStorage.setItem('db', JSON.stringify(server.db.dump()));

            mirageRequestHandler(verb, path, request);
        };
    }

    return server;
}
