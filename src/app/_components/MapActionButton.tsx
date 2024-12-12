export const MapActionButton = ({ address }: { address: string }) => {
  const handleNaverMapClick = () => {
    const naverMapUrl = `https://map.naver.com/p/search/${address}`;

    window.location.href = naverMapUrl;
  };

  return (
    <button
      className="flex flex-row items-center gap-1 mt-2 hover:text-gray-600 transition-colors"
      onClick={handleNaverMapClick}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    </button>
  );
};
