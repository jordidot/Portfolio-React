import React from 'react';
import Markdown from 'react-markdown';

function LinkRenderer(props) {
  return <a href={props.href} style={{ color: 'blue' }}>{props.children}</a>;
}

function ImageRenderer({ src, alt, title }) {
  return <img src={src} alt={alt} title={title} style={{ maxWidth: '100%' }} />;
}

const Button = ({ children }) => (
  <button onClick={incrementCounter}>{children}</button>
);

function MarkdownRenderer({ content }) {
  return (
    <>
      <section className='flex justify-center m-10'>
        <Markdown className="prose" components={{
          a: LinkRenderer,
          img: ImageRenderer,
          button: Button

        }}>{content}</Markdown>
      </section>
    </>
  )
}

export default MarkdownRenderer;