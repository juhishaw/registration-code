# Web3Firewall Portal

## Development
Please sign all commits with your Yubikey!

To build:
```sh
npm run build
```

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime.

To run locally:
```sh
npm run dev
```

Open up [http://localhost:8788](http://localhost:8788) and you should be ready to go!

## Deployment

We are currently hosting the portal on CloudFlare Pages. To deploy a new version:

1. Commit your changes and create a PR for main
2. After the branch is merged, run `npm run pages:deploy`
