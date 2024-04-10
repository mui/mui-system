# [Versions](https://mui.com/versions/)

## v0.0.6

<!-- generated comparing v6.0.0-alpha.1..next -->

_Apr 9, 2024_

A big thanks to the 3 contributors who made this release possible.
This release was mostly about 🐛 bug fixes and 📚 documentation improvements.

### `@pigment-css/react@0.0.6`

- &#8203;<!-- 12 -->[core] Remove `muiName` during eval phase (#41811) @brijeshb42

### `@pigment-css/nextjs-plugin@0.0.6`

- &#8203;<!-- 02 -->[nextjs] Handle file references passed through imports (#41817) @brijeshb42
- &#8203;<!-- 01 -->[nextjs] Allow usage of url() CSS function (#41758) @brijeshb42

### Docs

- &#8203;<!-- 06 -->[pigment-css] Fix README typo (#41808) @aarongarciah
- &#8203;<!-- 05 -->[pigment-css] Fix output on dynamic styles example (#41805) @aarongarciah

### Core

- &#8203;<!-- 13 -->[core] Remove unused files (#41818) @mnajdova

All contributors of this release in alphabetical order: @aarongarciah, @brijeshb42, @zanivan

## v0.0.5

_Apr 5, 2024_

A big thanks to the 4 contributors who made this release possible.

### `@pigment-css/react@0.0.5`

- Improve sx prop support (#41589) @brijeshb42
- Fix Emotion styled error (#41699) @siriwatknp
- Fix propTypes removal during eval stage (#41695) @brijeshb42
- Fix props forwarding (#41688) @siriwatknp
- Fix sx prop transformation on Box (#41705) @brijeshb42

### `@pigment-css/vite-plugin@0.0.5`

- Use constant filename for pigment styles (#41667) @brijeshb42

### `@pigment-css/nextjs-plugin@0.0.5`

- Add missing RTL implementation (#41751) @brijeshb42

### Docs

- [pigment-css] Update README.md installation to use the next tag (#41649) @mnajdova
- [pigment-css] Add "Building design system components" guide with Pigment CSS (#41635) @siriwatknp
- [pigment-css] Add small edits on the README (#41646) @danilo-leal
- [pigment-css] Edit the example app's README files (#41639) @danilo-leal

### Core

- [pigment-css][examples] Add example project with Remix (#41700) @brijeshb42

All contributors of this release in alphabetical order: @brijeshb42, @danilo-leal, @mnajdova, @siriwatknp

## v0.0.4

_Mar 26, 2024_

A big thanks to the 4 contributors who made this release possible. Here are some highlights ✨:

- ⬅️ Added RTL support in Pigment CSS (#41570) @brijeshb42

### `@pigment-css/react@0.0.4`

- Fix evaluation of undefined variables (#41569) @siriwatknp
- Fix react-modal demos location (#41560) @sai6855
- [react] RTL Support (#41570) @brijeshb42

### Docs

- [pigment-css] Update the RTL section on the readme (#41576) @danilo-leal

### Core

- [pigment-css][demo] Remove app specific pnpm workspace (#41393) @brijeshb42

All contributors of this release in alphabetical order: @brijeshb42, @danilo-leal, @sai6855, @siriwatknp

## v0.0.3

_Mar 18, 2024_

A big thanks to the 3 contributors who made this release possible.
This release was mostly about 🐛 bug fixes and 📚 documentation improvements.

### `@pigment-css/react@0.0.3`

- &#8203;<!-- 03 -->Add Box component (#41451) @brijeshb42

### `pigment-css/nextjs-plugin@0.0.3`

- &#8203;<!-- 04 -->Fix alias resolver (#41494) @brijeshb42
- &#8203;<!-- 05 -->Follow-up to #41494 (#41502) @brijeshb42

### Docs

- &#8203;<!-- 11 -->[pigment-css] Add media query guide (#41473) @siriwatknp
- &#8203;<!-- 10 -->[pigment-css] Fixing location of the ExtendTheme type in the docs (#41499) @jherr

All contributors of this release in alphabetical order: @brijeshb42, @jherr, @siriwatknp

## v0.0.2

_Mar 13, 2024_

A big thanks to the 4 contributors who made this release possible. Here are some highights ✨

- The Material UI free Checkout template got a design uplift (#41447) @zanivan

### `@pigment-css/react@0.0.2`

- Handle more scenarios while transforming sx prop (#41372) @brijeshb42
- Improve testing of fixtures (#41389) @brijeshb42
- Fix `keyframes` serialize styles error (#41395) @siriwatknp
- Use class selector instead of class value (#41442) @brijeshb42
- [next] Warn about unsupported turbo mode in Next.js (#41445) @brijeshb42

### Docs

- [pigment-css] Add example and guide section (#41249) @siriwatknp
- [pigment-css] Brand name nonbreaking space (#41438) @oliviertassinari
- [pigment-css] Fix import on the README (#41411) @danilo-leal
- [pigment-css] Edit starter template links on README (#41409) @danilo-leal
- [pigment-css] Tweak the examples and edit READMEs (#41408) @danilo-leal
- [pigment-css] Adjust the bit about CSS vars on the README (#41463) @danilo-leal

### Core

- [pigment-css] Make all Pigment CSS packages public (#41404) @brijeshb42
- [pigment-css] Rename directories to match package names (#41453) @brijeshb42
- [pigment-css] Example fix leading spaces (#41439) @oliviertassinari
- [examples] Add pigment-css-vite-ts starter example (#41196) @siriwatknp
- [examples] Add pigment-css-nextjs-ts starter project (#41105) @siriwatknp

All contributors of this release in alphabetical order: @brijeshb42, @danilo-leal, @oliviertassinari, @siriwatknp

## v0.0.1

_Mar 5, 2024_

A big thanks to the 3 contributors who made this release possible.
This is the first public release of the zero-runtime CSS-in-JS library, Pigment CSS.

### `@pigment-css/react@0.0.1`, `@pigment-css/nextjs-plugin@0.0.1`, `@pigment-css/vite-plugin@0.0.1`, & `@pigment-css/unplugin@0.0.1`

- &#8203;<!-- 06 -->[pigment-css] Add support for styled tagged-template literals (#41268) @brijeshb42
- &#8203;<!-- 04 -->[pigment-css] Move extendTheme to already existing @pigment-css/react/utils (#41254) @brijeshb42
- &#8203;<!-- 03 -->[pigment-css] Remove `object` intersection from CSS Fallback (#41271) @siriwatknp
- &#8203;<!-- 02 -->[pigment-css] Minor wording changes in README (#41253) @brijeshb42
- &#8203;<!-- 01 -->[pigment-css] Prepare zero-runtime packages for public release (#41226) @brijeshb42

### Docs

- &#8203;<!-- 19 -->[pigment-css] Add a Why section on the README (#41284) @danilo-leal

All contributors of this release in alphabetical order: @brijeshb42, @danilo-leal, @siriwatknp
