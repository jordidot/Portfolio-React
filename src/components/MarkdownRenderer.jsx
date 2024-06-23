import React from 'react';
import Markdown from 'react-markdown';

function MarkdownRenderer({ content }) {
  return (
    <section className='flex justify-center '>
    <div className="prose text-left text-gray-700   max-w-screen-md p-2 shadow-sm">
      <Markdown>
        {content}
      </Markdown>
    </div>
  </section>
  );
}

export default MarkdownRenderer;
