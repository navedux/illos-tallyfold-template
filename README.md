# Tallyfold

A free landing page template for a made-up product called Tallyfold, workpaper software for audit, tax and deal advisory firms: it ties each figure in a client's statements to the page and line it came from, and sends anything that doesn't match to a reviewer. It is illustrated with six animated illustrations by [Illos](https://illos.dev) in the Illos HUD style, and it has a light and a dark theme.

The layout is built like an instrument panel: framed panels with corner ticks and mono labels, a wide hero illustration, an uneven product grid, practice tabs, a security block, a results table that turns into cards on phones, questions and an email sign-up.

Tallyfold is not a real company, and every person, company and figure on the page is made up. Change the name, the copy and the numbers to your own.

## Run it

You need Node 18 or later.

```
npm install
npm run dev
```

Then open the address Vite prints (the dev script uses port 4883).

## Build it

```
npm run build
```

The finished site goes to `dist/`. It is plain HTML, CSS and JavaScript, so any static host can serve it. `npm run preview` serves `dist/` locally so you can check the build.

## What's inside

- `index.html` holds the page and all its copy. Sections have ids (`product`, `desks`, `security`, `results`, `faq`, `start`) that the nav links point to.
- `src/style.css` holds the styles. `:root` holds the light theme and `[data-theme="dark"]` the dark one; type sizes (`--f-*`) and spacing (`--p1` to `--p5`, on a 12 px beat) live there too. Add `class="panel"` to any block for the border and corner ticks.
- `src/main.js` runs the theme switch, the mobile menu, the practice tabs (click or arrow keys) and the sign-up form, and plays the illustrations while they are on screen.
- `illos/` holds the six illustrations as SVG files.
- `public/fonts` holds Inter and Geist Mono, self-hosted.

The sign-up form has no backend: it checks the email and shows a note. Point the `<form>` at your own endpoint or replace the submit handler.

Each illustration sits in the page as a comment such as `<!-- illos:intake -->`. The build swaps the comment for the SVG inline, so the illustration can read the page's colours and follow the theme switch. To move one, move its comment.

## How the illustrations behave

- Each one loops while it is on screen and pauses when it scrolls away.
- With reduced motion turned on in the system settings, every illustration shows one still frame.
- They take their colours from the `--illos-*` variables in `src/style.css`, in both themes.

## Fonts

Inter and Geist Mono are self-hosted in `public/fonts` under the SIL Open Font License (the licence files sit beside them).

## Licence

The code is MIT. The illustrations are free to use in sites you build from this template, but not to redistribute on their own. See `LICENSE.md`.

## Credit

The footer carries a small "Animated assets by Illos" link. More illustrations in this style are at [illos.dev](https://illos.dev), along with the skills that let your coding agent draw new ones for your own product.
