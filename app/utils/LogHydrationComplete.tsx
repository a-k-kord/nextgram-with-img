"use client";

import { useEffect } from 'react';

export default function LogHydrationComplete() {
    useEffect(() => {
        console.log('Hydration complete');
    }, []);

    return <div ></div>;
}

