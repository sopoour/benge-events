import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { FC } from 'react';
import styled from 'styled-components';
import { header } from '@app/styles/fonts';

const MarkdownSettings = styled.div`
  p {
    text-align: justify;
    font-size: 18px;
  }
  color: ${({ theme }) => theme.colors.fg.default};

  li {
    line-height: 2;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline !important;
      font-weight: 600;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    font-family: ${header.style.fontFamily};
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  img {
    max-height: 450px;
    width: max-content;
  }

  #ueber-uns-foto {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.media('sm')`
      h1 {
        font-size: 48px;
      }
      h2 {
        font-size: 36px;
      }
      h3 {
        font-size: 28px;
      }
      h4 {
        font-size: 20px;
        margin-bottom: -8px;
      }
      #ueber-uns-foto {
        display: flex;
        flex-direction: row;
        gap:40px;
        align-items: center;
      }
    `}
`;

type Props = {
  content: string;
  className?: string;
};

const MarkdownConfig: FC<Props> = ({ content, className }) => {
  return (
    <MarkdownSettings className={className}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
        skipHtml={false}
      >
        {content}
      </Markdown>
    </MarkdownSettings>
  );
};

export default MarkdownConfig;
