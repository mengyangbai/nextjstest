# NextJS x TypeScript x CloudFront x S3 x Auth0

- `amplify init`
- Defaults except for Distribution Directory Path: `.next`

- `amplify add auth`
- defaults

- `amplify add api`
- `GraphQL`
- Choose default auth type: `Cognito`
- Additional auth types?: `Y`
- `OpenID Connect`
- name: `Auth0`
- issuer URL: `https://dev-ABCDEFGHIJKLMNOP.us.auth0.com/`
- client id: `12345ABCDEFG`
- milliseconds token valid after issued: `3600000`
- milliseconds token valid after authenticated: `2592000000`
- Continue...

- `amplify add hosting`
- plugin module: `Amazon CloudFront and S3`
- hosting bucket: `testingnextcloudfronts33auth0-20230401010528-hostingbucket`

`amplify publish`

- Continue? `Y`

### Getting <AccessDenied> Screen

- edit s3 hosting bucket policy:

BEFORE:

```json
{
  "Version": "2012-10-17",
  "Id": "MyPolicy",
  "Statement": [
    {
      "Sid": "APIReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E6I60FI9Q5MN2"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::testingnextcloudfronts33auth0-20230401010528-hostingbucket-dev/*"
    }
  ]
}
```

AFTER:

```json
{
  "Version": "2012-10-17",
  "Id": "MyPolicy",
  "Statement": [
    {
      "Sid": "APIReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E6I60FI9Q5MN2"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::testingnextcloudfronts33auth0-20230401010528-hostingbucket-dev/*"
    },
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::testingnextcloudfronts33auth0-20230401010528-hostingbucket-dev/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::289971349213:distribution/E1INHF03WWMF3S"
        }
      }
    }
  ]
}
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
