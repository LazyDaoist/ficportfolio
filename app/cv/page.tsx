'use client';

import dynamic from 'next/dynamic';

const CV = dynamic(() => import('../components/CV'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
    </div>
  ),
});

export default function CVPage() {
  return <CV />;
} 