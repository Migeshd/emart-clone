import getMapUrl from '@/utils/getMapDetail';

function MapUsed() {
  return (
    <div className="h-50 m-auto mt-6 w-1/2">
      <iframe
        title="Google Map"
        src={`${getMapUrl()}`}
        className="h-[260px] w-full"
        aria-hidden="false"
      />
    </div>
  );
}

export default MapUsed;
