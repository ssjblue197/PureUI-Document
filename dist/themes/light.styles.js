import { css } from "lit";

export default css`
  :root,
  :host,
  .p-theme-light {
    color-scheme: light;

    --p-color-gray-50: hsl(0 0% 97.5%);
    --p-color-gray-100: hsl(240 4.8% 95.9%);
    --p-color-gray-200: hsl(240 5.9% 90%);
    --p-color-gray-300: hsl(240 4.9% 83.9%);
    --p-color-gray-400: hsl(240 5% 64.9%);
    --p-color-gray-500: hsl(240 3.8% 46.1%);
    --p-color-gray-600: hsl(240 5.2% 33.9%);
    --p-color-gray-700: hsl(240 5.3% 26.1%);
    --p-color-gray-800: hsl(240 3.7% 15.9%);
    --p-color-gray-900: hsl(240 5.9% 10%);
    --p-color-gray-950: hsl(240 7.3% 8%);

    --p-color-red-50: hsl(0 85.7% 97.3%);
    --p-color-red-100: hsl(0 93.3% 94.1%);
    --p-color-red-200: hsl(0 96.3% 89.4%);
    --p-color-red-300: hsl(0 93.5% 81.8%);
    --p-color-red-400: hsl(0 90.6% 70.8%);
    --p-color-red-500: hsl(0 84.2% 60.2%);
    --p-color-red-600: hsl(0 72.2% 50.6%);
    --p-color-red-700: hsl(0 73.7% 41.8%);
    --p-color-red-800: hsl(0 70% 35.3%);
    --p-color-red-900: hsl(0 62.8% 30.6%);
    --p-color-red-950: hsl(0 60% 19.6%);

    --p-color-orange-50: hsl(33.3 100% 96.5%);
    --p-color-orange-100: hsl(34.3 100% 91.8%);
    --p-color-orange-200: hsl(32.1 97.7% 83.1%);
    --p-color-orange-300: hsl(30.7 97.2% 72.4%);
    --p-color-orange-400: hsl(27 96% 61%);
    --p-color-orange-500: hsl(24.6 95% 53.1%);
    --p-color-orange-600: hsl(20.5 90.2% 48.2%);
    --p-color-orange-700: hsl(17.5 88.3% 40.4%);
    --p-color-orange-800: hsl(15 79.1% 33.7%);
    --p-color-orange-900: hsl(15.3 74.6% 27.8%);
    --p-color-orange-950: hsl(15.2 69.1% 19%);

    --p-color-amber-50: hsl(48 100% 96.1%);
    --p-color-amber-100: hsl(48 96.5% 88.8%);
    --p-color-amber-200: hsl(48 96.6% 76.7%);
    --p-color-amber-300: hsl(45.9 96.7% 64.5%);
    --p-color-amber-400: hsl(43.3 96.4% 56.3%);
    --p-color-amber-500: hsl(37.7 92.1% 50.2%);
    --p-color-amber-600: hsl(32.1 94.6% 43.7%);
    --p-color-amber-700: hsl(26 90.5% 37.1%);
    --p-color-amber-800: hsl(22.7 82.5% 31.4%);
    --p-color-amber-900: hsl(21.7 77.8% 26.5%);
    --p-color-amber-950: hsl(22.9 74.1% 16.7%);

    --p-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --p-color-yellow-100: hsl(54.9 96.7% 88%);
    --p-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --p-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --p-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --p-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --p-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --p-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --p-color-yellow-800: hsl(31.8 81% 28.8%);
    --p-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --p-color-yellow-950: hsl(33.1 69% 13.9%);

    --p-color-lime-50: hsl(78.3 92% 95.1%);
    --p-color-lime-100: hsl(79.6 89.1% 89.2%);
    --p-color-lime-200: hsl(80.9 88.5% 79.6%);
    --p-color-lime-300: hsl(82 84.5% 67.1%);
    --p-color-lime-400: hsl(82.7 78% 55.5%);
    --p-color-lime-500: hsl(83.7 80.5% 44.3%);
    --p-color-lime-600: hsl(84.8 85.2% 34.5%);
    --p-color-lime-700: hsl(85.9 78.4% 27.3%);
    --p-color-lime-800: hsl(86.3 69% 22.7%);
    --p-color-lime-900: hsl(87.6 61.2% 20.2%);
    --p-color-lime-950: hsl(86.5 60.6% 13.9%);

    --p-color-green-50: hsl(138.5 76.5% 96.7%);
    --p-color-green-100: hsl(140.6 84.2% 92.5%);
    --p-color-green-200: hsl(141 78.9% 85.1%);
    --p-color-green-300: hsl(141.7 76.6% 73.1%);
    --p-color-green-400: hsl(141.9 69.2% 58%);
    --p-color-green-500: hsl(142.1 70.6% 45.3%);
    --p-color-green-600: hsl(142.1 76.2% 36.3%);
    --p-color-green-700: hsl(142.4 71.8% 29.2%);
    --p-color-green-800: hsl(142.8 64.2% 24.1%);
    --p-color-green-900: hsl(143.8 61.2% 20.2%);
    --p-color-green-950: hsl(144.3 60.7% 12%);

    --p-color-emerald-50: hsl(151.8 81% 95.9%);
    --p-color-emerald-100: hsl(149.3 80.4% 90%);
    --p-color-emerald-200: hsl(152.4 76% 80.4%);
    --p-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --p-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --p-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --p-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --p-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --p-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --p-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --p-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --p-color-teal-50: hsl(166.2 76.5% 96.7%);
    --p-color-teal-100: hsl(167.2 85.5% 89.2%);
    --p-color-teal-200: hsl(168.4 83.8% 78.2%);
    --p-color-teal-300: hsl(170.6 76.9% 64.3%);
    --p-color-teal-400: hsl(172.5 66% 50.4%);
    --p-color-teal-500: hsl(173.4 80.4% 40%);
    --p-color-teal-600: hsl(174.7 83.9% 31.6%);
    --p-color-teal-700: hsl(175.3 77.4% 26.1%);
    --p-color-teal-800: hsl(176.1 69.4% 21.8%);
    --p-color-teal-900: hsl(175.9 60.8% 19%);
    --p-color-teal-950: hsl(176.5 58.6% 11.4%);

    --p-color-cyan-50: hsl(183.2 100% 96.3%);
    --p-color-cyan-100: hsl(185.1 95.9% 90.4%);
    --p-color-cyan-200: hsl(186.2 93.5% 81.8%);
    --p-color-cyan-300: hsl(187 92.4% 69%);
    --p-color-cyan-400: hsl(187.9 85.7% 53.3%);
    --p-color-cyan-500: hsl(188.7 94.5% 42.7%);
    --p-color-cyan-600: hsl(191.6 91.4% 36.5%);
    --p-color-cyan-700: hsl(192.9 82.3% 31%);
    --p-color-cyan-800: hsl(194.4 69.6% 27.1%);
    --p-color-cyan-900: hsl(196.4 63.6% 23.7%);
    --p-color-cyan-950: hsl(196.8 61% 16.1%);

    --p-color-sky-50: hsl(204 100% 97.1%);
    --p-color-sky-100: hsl(204 93.8% 93.7%);
    --p-color-sky-200: hsl(200.6 94.4% 86.1%);
    --p-color-sky-300: hsl(199.4 95.5% 73.9%);
    --p-color-sky-400: hsl(198.4 93.2% 59.6%);
    --p-color-sky-500: hsl(198.6 88.7% 48.4%);
    --p-color-sky-600: hsl(200.4 98% 39.4%);
    --p-color-sky-700: hsl(201.3 96.3% 32.2%);
    --p-color-sky-800: hsl(201 90% 27.5%);
    --p-color-sky-900: hsl(202 80.3% 23.9%);
    --p-color-sky-950: hsl(202.3 73.8% 16.5%);

    --p-color-blue-50: hsl(213.8 100% 96.9%);
    --p-color-blue-100: hsl(214.3 94.6% 92.7%);
    --p-color-blue-200: hsl(213.3 96.9% 87.3%);
    --p-color-blue-300: hsl(211.7 96.4% 78.4%);
    --p-color-blue-400: hsl(213.1 93.9% 67.8%);
    --p-color-blue-500: hsl(217.2 91.2% 59.8%);
    --p-color-blue-600: hsl(221.2 83.2% 53.3%);
    --p-color-blue-700: hsl(224.3 76.3% 48%);
    --p-color-blue-800: hsl(225.9 70.7% 40.2%);
    --p-color-blue-900: hsl(224.4 64.3% 32.9%);
    --p-color-blue-950: hsl(226.2 55.3% 18.4%);

    --p-color-indigo-50: hsl(225.9 100% 96.7%);
    --p-color-indigo-100: hsl(226.5 100% 93.9%);
    --p-color-indigo-200: hsl(228 96.5% 88.8%);
    --p-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --p-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --p-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --p-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --p-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --p-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --p-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --p-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --p-color-violet-50: hsl(250 100% 97.6%);
    --p-color-violet-100: hsl(251.4 91.3% 95.5%);
    --p-color-violet-200: hsl(250.5 95.2% 91.8%);
    --p-color-violet-300: hsl(252.5 94.7% 85.1%);
    --p-color-violet-400: hsl(255.1 91.7% 76.3%);
    --p-color-violet-500: hsl(258.3 89.5% 66.3%);
    --p-color-violet-600: hsl(262.1 83.3% 57.8%);
    --p-color-violet-700: hsl(263.4 70% 50.4%);
    --p-color-violet-800: hsl(263.4 69.3% 42.2%);
    --p-color-violet-900: hsl(263.5 67.4% 34.9%);
    --p-color-violet-950: hsl(265.1 61.5% 21.4%);

    --p-color-purple-50: hsl(270 100% 98%);
    --p-color-purple-100: hsl(268.7 100% 95.5%);
    --p-color-purple-200: hsl(268.6 100% 91.8%);
    --p-color-purple-300: hsl(269.2 97.4% 85.1%);
    --p-color-purple-400: hsl(270 95.2% 75.3%);
    --p-color-purple-500: hsl(270.7 91% 65.1%);
    --p-color-purple-600: hsl(271.5 81.3% 55.9%);
    --p-color-purple-700: hsl(272.1 71.7% 47.1%);
    --p-color-purple-800: hsl(272.9 67.2% 39.4%);
    --p-color-purple-900: hsl(273.6 65.6% 32%);
    --p-color-purple-950: hsl(276 59.5% 16.5%);

    --p-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --p-color-fuchsia-100: hsl(287 100% 95.5%);
    --p-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --p-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --p-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --p-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --p-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --p-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --p-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --p-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --p-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --p-color-pink-50: hsl(327.3 73.3% 97.1%);
    --p-color-pink-100: hsl(325.7 77.8% 94.7%);
    --p-color-pink-200: hsl(325.9 84.6% 89.8%);
    --p-color-pink-300: hsl(327.4 87.1% 81.8%);
    --p-color-pink-400: hsl(328.6 85.5% 70.2%);
    --p-color-pink-500: hsl(330.4 81.2% 60.4%);
    --p-color-pink-600: hsl(333.3 71.4% 50.6%);
    --p-color-pink-700: hsl(335.1 77.6% 42%);
    --p-color-pink-800: hsl(335.8 74.4% 35.3%);
    --p-color-pink-900: hsl(335.9 69% 30.4%);
    --p-color-pink-950: hsl(336.2 65.4% 15.9%);

    --p-color-rose-50: hsl(355.7 100% 97.3%);
    --p-color-rose-100: hsl(355.6 100% 94.7%);
    --p-color-rose-200: hsl(352.7 96.1% 90%);
    --p-color-rose-300: hsl(352.6 95.7% 81.8%);
    --p-color-rose-400: hsl(351.3 94.5% 71.4%);
    --p-color-rose-500: hsl(349.7 89.2% 60.2%);
    --p-color-rose-600: hsl(346.8 77.2% 49.8%);
    --p-color-rose-700: hsl(345.3 82.7% 40.8%);
    --p-color-rose-800: hsl(343.4 79.7% 34.7%);
    --p-color-rose-900: hsl(341.5 75.5% 30.4%);
    --p-color-rose-950: hsl(341.3 70.1% 17.1%);

    --p-color-primary-50: var(--p-color-sky-50);
    --p-color-primary-100: var(--p-color-sky-100);
    --p-color-primary-200: var(--p-color-sky-200);
    --p-color-primary-300: var(--p-color-sky-300);
    --p-color-primary-400: var(--p-color-sky-400);
    --p-color-primary-500: var(--p-color-sky-500);
    --p-color-primary-600: var(--p-color-sky-600);
    --p-color-primary-700: var(--p-color-sky-700);
    --p-color-primary-800: var(--p-color-sky-800);
    --p-color-primary-900: var(--p-color-sky-900);
    --p-color-primary-950: var(--p-color-sky-950);

    --p-color-success-50: var(--p-color-green-50);
    --p-color-success-100: var(--p-color-green-100);
    --p-color-success-200: var(--p-color-green-200);
    --p-color-success-300: var(--p-color-green-300);
    --p-color-success-400: var(--p-color-green-400);
    --p-color-success-500: var(--p-color-green-500);
    --p-color-success-600: var(--p-color-green-600);
    --p-color-success-700: var(--p-color-green-700);
    --p-color-success-800: var(--p-color-green-800);
    --p-color-success-900: var(--p-color-green-900);
    --p-color-success-950: var(--p-color-green-950);

    --p-color-warning-50: var(--p-color-amber-50);
    --p-color-warning-100: var(--p-color-amber-100);
    --p-color-warning-200: var(--p-color-amber-200);
    --p-color-warning-300: var(--p-color-amber-300);
    --p-color-warning-400: var(--p-color-amber-400);
    --p-color-warning-500: var(--p-color-amber-500);
    --p-color-warning-600: var(--p-color-amber-600);
    --p-color-warning-700: var(--p-color-amber-700);
    --p-color-warning-800: var(--p-color-amber-800);
    --p-color-warning-900: var(--p-color-amber-900);
    --p-color-warning-950: var(--p-color-amber-950);

    --p-color-danger-50: var(--p-color-red-50);
    --p-color-danger-100: var(--p-color-red-100);
    --p-color-danger-200: var(--p-color-red-200);
    --p-color-danger-300: var(--p-color-red-300);
    --p-color-danger-400: var(--p-color-red-400);
    --p-color-danger-500: var(--p-color-red-500);
    --p-color-danger-600: var(--p-color-red-600);
    --p-color-danger-700: var(--p-color-red-700);
    --p-color-danger-800: var(--p-color-red-800);
    --p-color-danger-900: var(--p-color-red-900);
    --p-color-danger-950: var(--p-color-red-950);

    --p-color-neutral-50: var(--p-color-gray-50);
    --p-color-neutral-100: var(--p-color-gray-100);
    --p-color-neutral-200: var(--p-color-gray-200);
    --p-color-neutral-300: var(--p-color-gray-300);
    --p-color-neutral-400: var(--p-color-gray-400);
    --p-color-neutral-500: var(--p-color-gray-500);
    --p-color-neutral-600: var(--p-color-gray-600);
    --p-color-neutral-700: var(--p-color-gray-700);
    --p-color-neutral-800: var(--p-color-gray-800);
    --p-color-neutral-900: var(--p-color-gray-900);
    --p-color-neutral-950: var(--p-color-gray-950);

    --p-color-neutral-0: hsl(0, 0%, 100%);
    --p-color-neutral-1000: hsl(0, 0%, 0%);

    --p-border-radius-small: 0.1875rem;
    --p-border-radius-medium: 0.25rem;
    --p-border-radius-large: 0.5rem;
    --p-border-radius-x-large: 1rem;

    --p-border-radius-circle: 50%;
    --p-border-radius-pill: 9999px;

    --p-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --p-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --p-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --p-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --p-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

    --p-spacing-3x-small: 0.125rem;
    --p-spacing-2x-small: 0.25rem;
    --p-spacing-x-small: 0.5rem;
    --p-spacing-small: 0.75rem;
    --p-spacing-medium: 1rem;
    --p-spacing-large: 1.25rem;
    --p-spacing-x-large: 1.75rem;
    --p-spacing-2x-large: 2.25rem;
    --p-spacing-3x-large: 3rem;
    --p-spacing-4x-large: 4.5rem;

    --p-transition-x-slow: 1000ms;
    --p-transition-slow: 500ms;
    --p-transition-medium: 250ms;
    --p-transition-fast: 150ms;
    --p-transition-x-fast: 50ms;

    --p-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    --p-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --p-font-serif: Georgia, "Times New Roman", serif;

    --p-font-size-2x-small: 0.625rem;
    --p-font-size-x-small: 0.75rem;
    --p-font-size-small: 0.875rem;
    --p-font-size-medium: 1rem;
    --p-font-size-large: 1.25rem;
    --p-font-size-x-large: 1.5rem;
    --p-font-size-2x-large: 2.25rem;
    --p-font-size-3x-large: 3rem;
    --p-font-size-4x-large: 4.5rem;

    --p-font-weight-light: 300;
    --p-font-weight-normal: 400;
    --p-font-weight-semibold: 500;
    --p-font-weight-bold: 700;

    --p-letter-spacing-denser: -0.03em;
    --p-letter-spacing-dense: -0.015em;
    --p-letter-spacing-normal: normal;
    --p-letter-spacing-loose: 0.075em;
    --p-letter-spacing-looser: 0.15em;

    --p-line-height-denser: 1;
    --p-line-height-dense: 1.4;
    --p-line-height-normal: 1.8;
    --p-line-height-loose: 2.2;
    --p-line-height-looser: 2.6;

    --p-focus-ring-color: var(--p-color-primary-600);
    --p-focus-ring-style: solid;
    --p-focus-ring-width: 3px;
    --p-focus-ring: var(--p-focus-ring-style) var(--p-focus-ring-width)
      var(--p-focus-ring-color);
    --p-focus-ring-offset: 1px;

    --p-button-font-size-small: var(--p-font-size-x-small);
    --p-button-font-size-medium: var(--p-font-size-small);
    --p-button-font-size-large: var(--p-font-size-medium);

    --p-input-height-small: 1.875rem;
    --p-input-height-medium: 2.5rem;
    --p-input-height-large: 3.125rem;

    --p-input-background-color: var(--p-color-neutral-0);
    --p-input-background-color-hover: var(--p-input-background-color);
    --p-input-background-color-focus: var(--p-input-background-color);
    --p-input-background-color-disabled: var(--p-color-neutral-100);
    --p-input-border-color: var(--p-color-neutral-300);
    --p-input-border-color-hover: var(--p-color-neutral-400);
    --p-input-border-color-focus: var(--p-color-primary-500);
    --p-input-border-color-disabled: var(--p-color-neutral-300);
    --p-input-border-width: 1px;
    --p-input-required-content: "*";
    --p-input-required-content-offset: -2px;
    --p-input-required-content-color: var(--p-input-label-color);

    --p-input-border-radius-small: var(--p-border-radius-medium);
    --p-input-border-radius-medium: var(--p-border-radius-medium);
    --p-input-border-radius-large: var(--p-border-radius-medium);

    --p-input-font-family: var(--p-font-sans);
    --p-input-font-weight: var(--p-font-weight-normal);
    --p-input-font-size-small: var(--p-font-size-small);
    --p-input-font-size-medium: var(--p-font-size-medium);
    --p-input-font-size-large: var(--p-font-size-large);
    --p-input-letter-spacing: var(--p-letter-spacing-normal);

    --p-input-color: var(--p-color-neutral-700);
    --p-input-color-hover: var(--p-color-neutral-700);
    --p-input-color-focus: var(--p-color-neutral-700);
    --p-input-color-disabled: var(--p-color-neutral-900);
    --p-input-icon-color: var(--p-color-neutral-500);
    --p-input-icon-color-hover: var(--p-color-neutral-600);
    --p-input-icon-color-focus: var(--p-color-neutral-600);
    --p-input-placeholder-color: var(--p-color-neutral-500);
    --p-input-placeholder-color-disabled: var(--p-color-neutral-600);
    --p-input-spacing-small: var(--p-spacing-small);
    --p-input-spacing-medium: var(--p-spacing-medium);
    --p-input-spacing-large: var(--p-spacing-large);

    --p-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --p-input-focus-ring-offset: 0;

    --p-input-filled-background-color: var(--p-color-neutral-100);
    --p-input-filled-background-color-hover: var(--p-color-neutral-100);
    --p-input-filled-background-color-focus: var(--p-color-neutral-100);
    --p-input-filled-background-color-disabled: var(--p-color-neutral-100);
    --p-input-filled-color: var(--p-color-neutral-800);
    --p-input-filled-color-hover: var(--p-color-neutral-800);
    --p-input-filled-color-focus: var(--p-color-neutral-700);
    --p-input-filled-color-disabled: var(--p-color-neutral-800);

    --p-input-label-font-size-small: var(--p-font-size-small);
    --p-input-label-font-size-medium: var(--p-font-size-medium);
    --p-input-label-font-size-large: var(--p-font-size-large);
    --p-input-label-color: inherit;

    --p-input-help-text-font-size-small: var(--p-font-size-x-small);
    --p-input-help-text-font-size-medium: var(--p-font-size-small);
    --p-input-help-text-font-size-large: var(--p-font-size-medium);
    --p-input-help-text-color: var(--p-color-neutral-500);

    --p-toggle-size-small: 0.875rem;
    --p-toggle-size-medium: 1.125rem;
    --p-toggle-size-large: 1.375rem;

    --p-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --p-panel-background-color: var(--p-color-neutral-0);
    --p-panel-border-color: var(--p-color-neutral-200);
    --p-panel-border-width: 1px;

    --p-tooltip-border-radius: var(--p-border-radius-medium);
    --p-tooltip-background-color: var(--p-color-neutral-800);
    --p-tooltip-color: var(--p-color-neutral-0);
    --p-tooltip-font-family: var(--p-font-sans);
    --p-tooltip-font-weight: var(--p-font-weight-normal);
    --p-tooltip-font-size: var(--p-font-size-small);
    --p-tooltip-line-height: var(--p-line-height-dense);
    --p-tooltip-padding: var(--p-spacing-2x-small) var(--p-spacing-x-small);
    --p-tooltip-arrow-size: 6px;

    --p-z-index-drawer: 700;
    --p-z-index-dialog: 800;
    --p-z-index-dropdown: 900;
    --p-z-index-toast: 950;
    --p-z-index-tooltip: 1000;
  }

  @supports (scrollbar-gutter: stable) {
    .p-scroll-lock {
      scrollbar-gutter: var(--p-scroll-lock-gutter) !important;
    }

    .p-scroll-lock body {
      overflow: hidden !important;
    }
  }

  @supports not (scrollbar-gutter: stable) {
    .p-scroll-lock body {
      padding-right: var(--p-scroll-lock-size) !important;
      overflow: hidden !important;
    }
  }

  .p-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--p-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .p-toast-stack p-alert {
    margin: var(--p-spacing-medium);
  }

  .p-toast-stack p-alert::part(base) {
    box-shadow: var(--p-shadow-large);
  }
`;
