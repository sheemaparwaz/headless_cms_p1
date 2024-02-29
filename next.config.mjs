/**original config */
/**
 //  @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
};
export default nextConfig;
 */


const isProd = process.env.NODE_ENV === 'production';

//export const assetPrefix = isProd ? '/MY-APP' : '';
//export const basePath = isProd ? '/MY-APP' : '';
//const isProd = process.env.NODE_ENV === 'production';

export const output = 'export';
export const basePath = isProd ? '/headless_cms_p1' : '';
export const assetPrefix = isProd ? '/headless_cms_p1' : '';
