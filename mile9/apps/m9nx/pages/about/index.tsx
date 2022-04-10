import { GetStaticProps } from 'next';
import styles from './index.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {props.name}!</h1>
    </div>
  );
}
export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'M9-nx',
    },
  };
};
export default About;
