/* eslint-disable @next/next/no-img-element */

import { BreadcrumbSeparator, Divider } from "@chakra-ui/react";
import { SeparatorVertical, SeparatorVerticalIcon } from "lucide-react";

const ImageIconsAndAlt = [
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-flickr.png",
    "Flickr Governo de São Paulo",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-linkedin.png",
    "Linkedin Governo de São Paulo",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-tiktok.png",
    "TikTok Governo de São Paulo",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-youtube.png",
    "Youtube Governo de São Paulo",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-twitter.png",
    "Twitter Governo de São Paulo",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-insta.png",
    "Instagram Governo de São Paulo",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-facebook.png",
    "Facebook Governo de São Paulo",
  ],
];

const AcessibilityIconsAndAlt = [
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-big-font.png",
    "Aumentar Fonte",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-small-font.png",
    "Diminuir Fonte",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-error-report.png",
    "Reportar Erros",
  ],
  [
    "https://etecitanhaem.cps.sp.gov.br/wp-content/themes/tema-cps/images/sao-paulo/i-contrast.png",
    "Contraste",
  ],
];

export function NavIcons() {
  return (
    <div className="justify-end gap-1 h-auto flex p-3">
      <div className="flex gap-1">
        {ImageIconsAndAlt.map(([src, alt, href], i) => (
          <img
            className="size-[25px] hover:cursor-pointer"
            onClick={() => {
              window.open((href = "#"), "_blank");
            }}
            src={src}
            alt={alt}
            key={i}
          />
        ))}
      </div>
      <div className="text-transparent text-black self-end">
        <p className="text-transparent w-24 md:text-gray-900 text-xs self-end">/governosp</p>
      </div>
      <hr className="h-5 w-0.5 self-center bg-zinc-500 mr-5" />
      <div className="flex gap-1">
        {AcessibilityIconsAndAlt.map(([src, alt], i) => (
          <img
            className="size-[25px] hover:cursor-pointer"
            onClick={() => {
              window.open(src, "_blank");
            }}
            src={src}
            alt={alt}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
