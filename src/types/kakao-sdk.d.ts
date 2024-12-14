interface Window {
  Kakao: {
    init: (key: string) => void;
    Share: {
      sendDefault: (data: {
        objectType: string;
        content: {
          title: string;
          description: string;
          imageUrl: string;
          imageWidth: number;
          imageHeight: number;
          link: {
            webUrl: string;
            mobileWebUrl: string;
          };
        };
      }) => void;
    };
  };
}
