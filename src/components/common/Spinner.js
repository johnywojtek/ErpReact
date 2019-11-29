import React from 'react';

export default function Spinner() {
    return (
        <div className="full-spinner">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}
