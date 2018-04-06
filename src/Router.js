import loadable from 'loadable-components';

export const Home = loadable(() => import('components/home/Home'));
export const About = loadable(() => import('components/about/About'));