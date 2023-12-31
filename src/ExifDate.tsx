import "./styles.css";
import React, { useCallback, useRef } from "react";
import EXIF from "exif-js";

export default function ExifDate() {
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

        //日時の情報を取得
        const original_date = EXIF.getTag(image, "DateTimeOriginal");
        const updated_date = EXIF.getTag(image, "DateTime");
        console.log(original_date);
        console.log(updated_date);
      });
    };
  }

  return (
    <div className="App">
      <h2>exif-js Date Test</h2>
      <input ref={inputRef} onChange={onChange} type="file" />
    </div>
  );
}
