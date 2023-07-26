import React from 'react';
import './index.css'

const Masonry = (props) => {
  const { data, column, gap } = props;

  const columns = Array.from({ length: column }, () => []);

  data.forEach((img, i) => {
    const columnIndex = i % column;
    columns[columnIndex].push(img);
  });

  return (
    <div style={{ columnCount: column, columnGap: `${gap}px` }}>
      {columns.map((columnImgs, i) => (
        <div key={i} style={{ padding: `${gap / 2}px` }}>
          {columnImgs.map((img, j) => (
            <img key={j} src={img.url} alt={`Project ${img.id}`} className="galleryImage" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
