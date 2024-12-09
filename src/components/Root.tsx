import { TonConnectUIProvider } from '@tonconnect/ui-react';

import { App } from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';

function ErrorBoundaryError({ error }: { error: unknown }) {
    return (
        <div>
            <p>An unhandled error occurred:</p>
            <blockquote>
            <code>
                {error instanceof Error
                    ? error.message
                    : typeof error === 'string'
                    ? error
                    : JSON.stringify(error)}
            </code>
            </blockquote>
        </div>
    );
}

const manifestUrl = "https://tg-mini-app.local/tonconnect-manifest.json";

export function Root() {
    return (
        <ErrorBoundary fallback={ErrorBoundaryError}>
            <TonConnectUIProvider manifestUrl={manifestUrl}>
                <App />
            </TonConnectUIProvider>
        </ErrorBoundary>
);
}