# Browserbase Chrome Extension Example

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

This is a simple extension for the purpose of demonstrating how to upload a [chrome extension to Browserbase](https://docs.browserbase.com/features/custom-extension).

## Getting Started

First, clone the repository and run the development server:

```bash
pnpm dev
# or
npm run dev
```

For further guidance, [visit our Documentation](https://docs.browserbase.com/)

## Generating a zip bundle for Browserbase

Run the following:

```bash
pnpm build --zip
# OR
npm run build -- --zip
```

You should see the build directory, with the zip file inside called `chrome-mv3-prod.zip`.

## Uploading a chrome extension to Browserbase

Run the following command, replacing `<BROWSERBASE_API_KEY>` with your Browserbase API key.

This should return a response with the extension ID.

```zsh
curl --request POST \
  --url https://www.browserbase.com/v1/extensions \
  --header 'Content-Type: multipart/form-data' \
  --header 'X-BB-API-Key: <BROWSERBASE_API_KEY>' \
  --form 'file=@build/chrome-mv3-prod.zip'
```