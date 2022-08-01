This is a `create-next-app` template for presenting a collection of estimates in [squiggle](https://squiggle-language.com)

```bash
yarn create next-app our-estimates --example https://github.com/quantified-uncertainty/next-app-with-squiggle
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the `.mdx` files in `pages` with your estimates

```bash
pages
├── _app.tsx
├── index.tsx
├── intro.md
├── latex-demo.md
├── squiggle-demo.mdx
├── team.md
└── worldview
    ├── ai.mdx
    ├── bio.mdx
    └── index.md
```

After copying your `.squiggle` files into `public/estimates`

``` bash
public/
├── estimates
│   └── baz.squiggle
├── favicon.ico
├── quri-logo.png
└── quri-logo-with-QURI-written-underneath.png
```

A typical invocation of squiggle in a `.mdx` file is as follows

``` jsx
import { DynamicSquiggleEditorWithImportedBindings as SquiggleEditor } from "../components/DynamicSquiggleEditorWithImportedBindings"

<SquiggleEditor defaultCode="xrisk.bioRiskAtYearAfter2022(4)" bindingsImportUrl="/estimates/xrisk.squiggle" /> 
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
