import React from 'react';

const FooterPage = () => {
  return (
    <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 lg:bottom-8 lg:left-8 text-gray-400 text-xs xs:text-sm md:text-base">
      <p>Country: Russia</p>
      <p>Year: 2025</p>
      <p>
        Author: <a href="https://github.com/awwwdee" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">awwwdee</a>
      </p>
    </div>
  );
};

export default FooterPage;