/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Empty by default.
      topLevelImportPaths: [],
      // Defaults to ["index"].
      meaninglessFileNames: ["index"],
      // Enabled by default.
      cssProp: true,
      // Empty by default.
      namespace: "",
      // Not supported yet.
      minify: false,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: false,
    },
  },


  images: {
    domains: ['www.theandroidportal.com'],
  },
  async headers() {
    return [
      {
        source: '/:path(.*)',
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://prod.d2l9sb71459wfz.amplifyapp.com"
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
        ]
      },
    ]
  },
}

const ContentSecurityPolicy = `
  default-src localhost:3000 'self';
  connect-src 'self' https://cognito-identity.us-east-1.amazonaws.com/;
  object-src 'none';
  script-src 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https:;
  font-src 'self';
  base-uri 'none';
  style-src 'unsafe-inline';
`


module.exports = nextConfig