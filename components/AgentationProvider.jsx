'use client';

import dynamic from 'next/dynamic';

const Agentation = dynamic(
  () => import('agentation').then((mod) => mod.Agentation),
  { ssr: false }
);

export default function AgentationProvider() {
  if (process.env.NODE_ENV === 'production') return null;
  return <Agentation />;
}
