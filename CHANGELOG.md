# [Versions](https://mui.com/versions/)

## v0.0.15

<!-- generated comparing v0.0.14..master -->

_Jun 24, 2024_

A big thanks to the 5 contributors who made this release possible. Here are some highlights ✨:

- 🚀 Added layout components (#144) @DiegoAndai, (#146) @siriwatknp, (#143) @brijeshb42, (#118) @brijeshb42

### `@pigment-css/react@0.0.15`

- Create Grid component (#144) @DiegoAndai
- Support transpiled library for `globalCss` and `keyframes` (#155) @siriwatknp
- Remove sx transform logic and leverage Emotion unitless (#149) @siriwatknp
- Export `globalCss` from index (#148) @siriwatknp
- Create Hidden component (#146) @siriwatknp
- Implement Container component (#143) @brijeshb42
- Create Stack component (#118) @brijeshb42

### `@pigment-css/unplugin@0.0.15`

- Fix misuse variable to transform libraries (#153) @siriwatknp

### Core

- [code-infra] Propagate pnpm engine in package.json (#126) @Janpot
- [core] Update package manager to 9.4.0 (#156) @siriwatknp
- [core] Update package manager to follow core repo (#150) @siriwatknp
- [infra] Add support donation button @oliviertassinari

All contributors of this release in alphabetical order: @brijeshb42, @DiegoAndai, @Janpot, @oliviertassinari, @siriwatknp

## v0.0.14

A big thanks to the 1 contributors who made this release possible:

### `@pigment-css/unplugin@0.0.14`

- Fix the path check for Windows (#136) @siriwatknp

All contributors of this release in alphabetical order: @siriwatknp

## v0.0.13

<!-- generated comparing v0.0.12..master -->

A big thanks to the 2 contributors who made this release possible:

### `@pigment-css/react@0.0.13`

- Decouple `sx` prop from system and add docs (#57) @siriwatknp
- Fix useTheme import change (#134) @brijeshb42

All contributors of this release in alphabetical order: @brijeshb42, @siriwatknp

## v0.0.12

<!-- generated comparing v0.0.11..master -->

_Jun 4, 2024_

A big thanks to the 6 contributors who made this release possible. Here are some highlights ✨:

- 🚀 New `globalCss` API for creating global styles (#31) @siriwatknp
- 🪄 Support configurable runtime theme (#105) @brijeshb42

### `@pigment-css/react@0.0.12`

- Add `createExtendSxProp` for Material UI integration (#112) @siriwatknp
- Add `globalCss` processor (#31) @siriwatknp
- Implement useTheme processor and runtime theme (#105) @brijeshb42
- Implement variant matching parity (#111) @DiegoAndai
- Ignore urls starting with # (#106) @brijeshb42
- Make theme optional in Pigment CSS config (#108) @brijeshb42

### Docs

- Add logo to the README (#121) @danilo-leal
- Add badges like in Material UI @oliviertassinari
- Fix styleOverrides usage in README (#110) @brijeshb42
- Improve wording (#70) @aarongarciah
- Fix roadmap link (#60) @oliviertassinari

### Core

- Remove confusing comment @oliviertassinari
- Cleanup (#63) @brijeshb42
- Add stylelint (#109) @oliviertassinari
- Use test-utils pacakge from npm (#113) @brijeshb42
- Use shared .stylelintrc.js config (#103) @oliviertassinari
- Fix instructions to run (#75) @oliviertassinari

All contributors of this release in alphabetical order: @aarongarciah, @brijeshb42, @danilo-leal, @DiegoAndai, @oliviertassinari, @siriwatknp

## v0.0.11

_May 8, 2024_

A big thanks to the 2 contributors who made this release possible. Here are some highlights ✨:

- ✨ `sx` prop is now working on any components (#37) @siriwatknp

### `@pigment-css/react@0.0.11`

- Support array for `sx` prop (#52) @siriwatknp
- Replace `sx` callback object param with `theme` (#51) @siriwatknp
- Enable `sx` prop on any components (#37) @siriwatknp
- Replace lowercase with lowerFirst (#54) @siriwatknp
- Reorder the css generation order for styled calls (#56) @brijeshb42

### Core

- Set root version to 0.0.10 (#44) @siriwatknp

All contributors of this release in alphabetical order: @@brijeshb42, @siriwatknp

## v0.0.10

<!-- generated comparing v0.0.9..master -->

_May 1, 2024_

A big thanks to the 2 contributors who made this release possible.

### `@pigment-css/react@0.0.10`

- Fix styled inheritance (#40) @siriwatknp
- Fix prop forwarding when `as` component is provided to HTML styled component (#43) @siriwatknp

### `@pigment-css/nextjs-plugin@0.0.10`

- Transform `!important` CSS to an intermediate representation (#38) @brijeshb42

All contributors of this release in alphabetical order: @brijeshb42, @siriwatknp

## v0.0.9

<!-- generated comparing v0.0.8..master -->

_Apr 22, 2024_

A big thanks to the 2 contributors who made this release possible.

### `@pigment-css/react@0.0.9`

- [fix] Use wildcard for exports instead of individual paths (#28) @brijeshb42
- [fix] Add `private-runtime` directory in the package.json (#33) @mnajdova

### Core

- Enable release:changelog in CI (#30) @mnajdova

All contributors of this release in alphabetical order: @brijeshb42, @mnajdova

## v0.0.8

_Apr 19, 2024_

A big thanks to the 3 contributors who made this release possible.
This release is mostly around infrastructure work related to moving the project to its own repository.
Starting with this release, all packages are going to be released under the `latest` tag, instead of `next`, in order to simplify the installation process.

### `@pigment-css/react@0.0.8`

- [core][enhancement] Disable WeakRef usage in WyW modulate evaluation (#25) @brijeshb42
- [core] Add support for sx replacement in transformed jsx calls (#22) @brijeshb42

### Docs

- [react] Add How Pigment CSS works guide (#18) @brijeshb42
- Update creating a new issue link (#20) @ZeeshanTamboli
- Fix wrong header hash in the README.md (#26) @mnajdova

### Core

- Create Circle CI config (#4) @mnajdova
- Enable the CI (#12) @mnajdova
- Enable ci/sandbox (#14) @mnajdova
- Remove paths associated with the @mui packages (#15) @mnajdova
- Add GitHub workflows (#19) @mnajdova
- Add build:ci script (#23) @mnajdova

All contributors of this release in alphabetical order: @brijeshb42, @mnajdova, @ZeeshanTamboli

## v0.0.7

_Apr 17, 2024_

A big thanks to the 2 contributors who made this release possible. Here is the highlight of this release ✨:

- 🚀 Updated the sx transformation to also support components created with emotion

### `@pigment-css/react@0.0.7`

- Implement sx transform for system components (#41861) @brijeshb42

### Docs

- [pigment-css] Fixed README typos (#41870) @MohammadShehadeh

All contributors of this release in alphabetical order: @brijeshb42, @MohammadShehadeh

## v0.0.6

_Apr 9, 2024_

A big thanks to the 3 contributors who made this release possible.
This release was mostly about 🐛 bug fixes and 📚 documentation improvements.

### `@pigment-css/react@0.0.6`

- [core] Remove `muiName` during eval phase (#41811) @brijeshb42

### `@pigment-css/nextjs-plugin@0.0.6`

- [nextjs] Handle file references passed through imports (#41817) @brijeshb42
- [nextjs] Allow usage of url() CSS function (#41758) @brijeshb42

### Docs

- [pigment-css] Fix README typo (#41808) @aarongarciah
- [pigment-css] Fix output on dynamic styles example (#41805) @aarongarciah

### Core

- [core] Remove unused files (#41818) @mnajdova

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

- Add Box component (#41451) @brijeshb42

### `pigment-css/nextjs-plugin@0.0.3`

- Fix alias resolver (#41494) @brijeshb42
- Follow-up to #41494 (#41502) @brijeshb42

### Docs

- [pigment-css] Add media query guide (#41473) @siriwatknp
- [pigment-css] Fixing location of the ExtendTheme type in the docs (#41499) @jherr

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

- [pigment-css] Add support for styled tagged-template literals (#41268) @brijeshb42
- [pigment-css] Move extendTheme to already existing @pigment-css/react/utils (#41254) @brijeshb42
- [pigment-css] Remove `object` intersection from CSS Fallback (#41271) @siriwatknp
- [pigment-css] Minor wording changes in README (#41253) @brijeshb42
- [pigment-css] Prepare zero-runtime packages for public release (#41226) @brijeshb42

### Docs

- [pigment-css] Add a Why section on the README (#41284) @danilo-leal

All contributors of this release in alphabetical order: @brijeshb42, @danilo-leal, @siriwatknp
