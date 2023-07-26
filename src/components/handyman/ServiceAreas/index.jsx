import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function ServiceAreas() {
  return (
    <div style={{ minHeight: '50vh' }}>
      <div className='flex flex-wrap justify-between mb-4'>
        <h1 className='font-medium text-2xl w-30'>Service Areas</h1>
      </div>
      <Map />
    </div>
  );
}
