import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

/* eslint-disable-next-line */
export interface SlugProps extends ParsedUrlQuery {
  slug: string;
}

export function Slug(props: SlugProps) {
  return (
    <div>
      <h1>Visiting {props.slug}</h1>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths<SlugProps> = async () => {
  return {
    paths: [1, 2, 3].map((idx) => {
      return {
        params: {
          slug: `page${idx}`,
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<SlugProps> = async ({
  params,
}: {
  params: SlugProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};
export default Slug;
