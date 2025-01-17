import { Chain, Wallet } from '@rainbow-me/rainbowkit';

import { SequenceConnector, SharedEIP6492Status } from './sequence-connector';
import { sequence } from '0xsequence';

export interface MyWalletOptions {
  chains: Chain[];
  connect?: sequence.provider.ConnectOptions;
  useEIP6492?: boolean
}

export function useSequenceEIP6492(enabled: boolean) {
   SharedEIP6492Status.setEIP6492(enabled)
 }

export const sequenceWallet = ({ useEIP6492, chains, connect }: MyWalletOptions): Wallet => ({
  id: 'sequence',
  name: 'Sequence',
  iconUrl: icon,
  iconBackground: '#fff',
  downloadUrls: {
    browserExtension: 'https://sequence.app',
  },
  createConnector: () => {
    const connector = new SequenceConnector({
      chains,
      options: {
        connect,
        useEIP6492
      },
    });

    return {
      connector,
      mobile: {
        getUri: async () => {
          try {
            await connector.connect();
            return window.location.href;
          } catch (e) {
            console.error('Failed to connect');
          }
          return '';
        },
      },
      desktop: {
        getUri: async () => {
          try {
            await connector.connect();
          } catch (e) {
            console.error('Failed to connect');
          }
          return '';
        },
      },
    };
  },
}) as Wallet;

const icon = `data:image/svg+xml;base64,`+btoa(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns="http://www.w3.org/2000/svg"
   style="fill:none"
   id="svg1316"
   version="1.1"
   viewBox="0 0 396 396"
   height="396"
   width="396">
  <g
     transform="translate(0,38)"
     id="g1256"
     clip-path="url(#clip0_5_131)">
    <g
       id="g1254"
       clip-path="url(#clip1_5_131)">
      <path
         style="fill:#111111"
         id="path1232"
         d="M 0,67.5049 V 250.165 c 0,37.282 30.1402,67.505 67.32,67.505 h 261.36 c 37.18,0 67.32,-30.223 67.32,-67.505 V 67.5049 C 396,30.223 365.86,0 328.68,0 H 67.32 C 30.1402,0 0,30.223 0,67.5049 Z" />
      <path
         style="fill:url(#paint0_linear_5_131)"
         id="path1234"
         d="M 0,67.5049 V 250.165 c 0,37.282 30.1402,67.505 67.32,67.505 h 261.36 c 37.18,0 67.32,-30.223 67.32,-67.505 V 67.5049 C 396,30.223 365.86,0 328.68,0 H 67.32 C 30.1402,0 0,30.223 0,67.5049 Z" />
      <path
         style="fill:url(#paint1_linear_5_131)"
         id="path1236"
         d="m 98.9999,79.4176 c 0,-10.9653 -8.8648,-19.8544 -19.8,-19.8544 -10.9352,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.8648,19.8544 19.8,19.8544 10.9352,0 19.8,-8.8892 19.8,-19.8544 z" />
      <path
         style="fill:url(#paint2_linear_5_131)"
         id="path1238"
         d="m 98.9999,79.4176 c 0,-10.9653 -8.8648,-19.8544 -19.8,-19.8544 -10.9352,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.8648,19.8544 19.8,19.8544 10.9352,0 19.8,-8.8892 19.8,-19.8544 z" />
      <path
         style="fill:url(#paint3_linear_5_131)"
         id="path1240"
         d="m 98.9999,79.4176 c 0,-10.9653 -8.8648,-19.8544 -19.8,-19.8544 -10.9352,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.8648,19.8544 19.8,19.8544 10.9352,0 19.8,-8.8892 19.8,-19.8544 z" />
      <path
         style="fill:url(#paint4_linear_5_131)"
         id="path1242"
         d="m 98.9999,238.126 c 0,-10.965 -8.8648,-19.854 -19.8,-19.854 -10.9352,0 -19.8,8.889 -19.8,19.854 0,10.966 8.8648,19.855 19.8,19.855 10.9352,0 19.8,-8.889 19.8,-19.855 z" />
      <path
         style="fill:url(#paint5_linear_5_131)"
         id="path1244"
         d="m 336.6,158.835 c 0,-10.965 -8.865,-19.854 -19.8,-19.854 -10.935,0 -19.8,8.889 -19.8,19.854 0,10.965 8.865,19.855 19.8,19.855 10.935,0 19.8,-8.89 19.8,-19.855 z" />
      <path
         style="fill:url(#paint6_linear_5_131)"
         id="path1246"
         d="m 336.6,158.835 c 0,-10.965 -8.865,-19.854 -19.8,-19.854 -10.935,0 -19.8,8.889 -19.8,19.854 0,10.965 8.865,19.855 19.8,19.855 10.935,0 19.8,-8.89 19.8,-19.855 z" />
      <path
         style="fill:url(#paint7_linear_5_131)"
         id="path1248"
         d="M 316.8,59.5632 H 158.4 c -10.935,0 -19.8,8.8891 -19.8,19.8544 0,10.9652 8.865,19.8544 19.8,19.8544 h 158.4 c 10.935,0 19.8,-8.8892 19.8,-19.8544 0,-10.9653 -8.865,-19.8544 -19.8,-19.8544 z" />
      <path
         style="fill:url(#paint8_linear_5_131)"
         id="path1250"
         d="M 316.8,218.272 H 158.4 c -10.935,0 -19.8,8.889 -19.8,19.854 0,10.966 8.865,19.855 19.8,19.855 h 158.4 c 10.935,0 19.8,-8.889 19.8,-19.855 0,-10.965 -8.865,-19.854 -19.8,-19.854 z" />
      <path
         style="fill:url(#paint9_linear_5_131)"
         id="path1252"
         d="M 237.6,138.981 H 79.2 c -10.9352,0 -19.8,8.889 -19.8,19.854 0,10.965 8.8648,19.855 19.8,19.855 h 158.4 c 10.935,0 19.8,-8.89 19.8,-19.855 0,-10.965 -8.865,-19.854 -19.8,-19.854 z" />
    </g>
  </g>
  <defs
     id="defs1314">
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="318"
       x2="198"
       y1="4.0585401e-05"
       x1="198"
       id="paint0_linear_5_131">
      <stop
         id="stop1258"
         stop-color="#1D273D" />
      <stop
         id="stop1260"
         stop-color="#0D0F13"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="63"
       x2="92.5"
       y1="99"
       x1="65.5"
       id="paint1_linear_5_131">
      <stop
         id="stop1263"
         stop-color="#4462FE" />
      <stop
         id="stop1265"
         stop-color="#7D69FA"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="97.591103"
       x2="96.137703"
       y1="99.291199"
       x1="62.879902"
       id="paint2_linear_5_131">
      <stop
         id="stop1268"
         stop-color="#3757FD" />
      <stop
         id="stop1270"
         stop-color="#6980FA"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="97.591103"
       x2="96.137703"
       y1="99.291199"
       x1="62.879902"
       id="paint3_linear_5_131">
      <stop
         id="stop1273"
         stop-color="#2447FF" />
      <stop
         id="stop1275"
         stop-color="#6980FA"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="223.5"
       x2="91.5"
       y1="251.5"
       x1="65"
       id="paint4_linear_5_131">
      <stop
         id="stop1278"
         stop-color="#BC3EE6" />
      <stop
         id="stop1280"
         stop-color="#D972F1"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="146"
       x2="329.5"
       y1="172"
       x1="305"
       id="paint5_linear_5_131">
      <stop
         id="stop1283"
         stop-color="#29BDFF" />
      <stop
         id="stop1285"
         stop-color="#96E7FB"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="176.772"
       x2="334.56699"
       y1="178.418"
       x1="300.17999"
       id="paint6_linear_5_131">
      <stop
         id="stop1288"
         stop-color="#23BBFF" />
      <stop
         id="stop1290"
         stop-color="#85E7FF"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="60"
       x2="317.5"
       y1="99"
       x1="154.5"
       id="paint7_linear_5_131">
      <stop
         id="stop1293"
         stop-color="#23BBFF" />
      <stop
         id="stop1295"
         stop-color="#85E7FF"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="218"
       x2="312.5"
       y1="258"
       x1="156"
       id="paint8_linear_5_131">
      <stop
         id="stop1298"
         stop-color="#2447FF" />
      <stop
         id="stop1300"
         stop-color="#6980FA"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="139"
       x2="235.5"
       y1="179"
       x1="86.000099"
       id="paint9_linear_5_131">
      <stop
         id="stop1303"
         stop-color="#6634FF" />
      <stop
         id="stop1305"
         stop-color="#9C6DFF"
         offset="1" />
    </linearGradient>
    <clipPath
       id="clip0_5_131">
      <rect
         style="fill:#ffffff"
         y="0"
         x="0"
         id="rect1308"
         height="317.67001"
         width="396" />
    </clipPath>
    <clipPath
       id="clip1_5_131">
      <rect
         style="fill:#ffffff"
         y="0"
         x="0"
         id="rect1311"
         height="317.67001"
         width="396" />
    </clipPath>
  </defs>
</svg>`)
