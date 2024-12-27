import React, { useEffect, useRef, useState } from 'react';

function Preview({ content }) {
  const contentRef = useRef(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const pageHeight = 842; // A4 height in pixels (29.7cm ≈ 842px)
      const pageContentHeight = pageHeight - 150; // Accounting for padding
      const numberOfPages = Math.ceil(contentHeight / pageContentHeight);

      // Split content into pages
      const contentElements = Array.from(contentRef.current.children);
      const newPages = [];
      let currentPage = [];
      let currentHeight = 0;

      contentElements.forEach((element) => {
        const elementHeight = element.offsetHeight;
        if (currentHeight + elementHeight > pageContentHeight && currentPage.length > 0) {
          newPages.push([...currentPage]);
          currentPage = [element];
          currentHeight = elementHeight;
        } else {
          currentPage.push(element);
          currentHeight += elementHeight;
        }
      });

      if (currentPage.length > 0) {
        newPages.push(currentPage);
      }

      setPages(newPages);
    }
  }, [content]);

  return (
    <div className="preview-container">
      <div ref={contentRef} style={{ display: 'none' }}>
        {content}
      </div>
      {pages.map((pageContent, pageIndex) => (
        <div key={pageIndex} className="preview-page">
          {pageContent.map((element, elementIndex) => (
            React.cloneElement(element, { key: elementIndex })
          ))}
        </div>
      ))}
    </div>
  );
}

export default Preview; 