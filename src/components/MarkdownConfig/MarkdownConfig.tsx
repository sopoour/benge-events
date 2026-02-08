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
    font-size: 16px;
    line-height: 1.5;
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
    font-weight: 600;

    &:hover {
      text-decoration: underline !important;
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
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 18px;
  }

  img {
    height: unset;
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

      img {
        height: auto;
        width: 100%;
        object-fit: cover;
      }

       p {
        font-size: 18px;
      }
    `}
`;

type Props = {
  content: string;
  className?: string;
};

const MarkdownConfig: FC<Props> = ({ content, className }) => {
  const LinkRenderer = (props: any) => (
    <a href={props.href} target="_blank" aria-label={`Link to ${props.href}`}>
      {props.children}
    </a>
  );

  return (
    <MarkdownSettings className={className}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
        skipHtml={false}
        components={{ a: LinkRenderer }}
      >
        {content}
      </Markdown>
    </MarkdownSettings>
  );
};

export default MarkdownConfig;
