import "./styles.css";
import React, { useCallback, useRef } from "react";
import EXIF from "exif-js";

export default function ExifLocate() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback(() => {
    if (inputRef.current?.files && inputRef.current.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          getExif(reader.result as string);
        },
        false,
      );
      reader.readAsDataURL(inputRef.current.files[0]);
    }
  }, []);

  function getExif(url: string) {
    const image = new Image();
    image.src = url;
    image.onload = function () {
      EXIF.getData(image as any, function () {
        // 保有している情報を確認
        console.log(EXIF.pretty(image));

        //EXIF情報の緯度・経度タグを取得
        const gpsLatitude = EXIF.getTag(image, 'GPSLatitude')
        const gpgLongitude = EXIF.getTag(image, 'GPSLongitude')

        //度分秒を10進数に変換
        const lat = gpsLatitude[0]/1 + gpsLatitude[1]/60 + gpsLatitude[2]/3600
        const lon = gpgLongitude[0]/1 + gpgLongitude[1]/60 + gpgLongitude[2]/3600
        console.log(`緯度=${lat}`)
        console.log(`経度=${lon}`)
      });
    };
  }

  return (
    <div className="App">
      <h1>exif-js Locate Test</h1>
      <input ref={inputRef} onChange={onChange} type="file" />
    </div>
  );
}
