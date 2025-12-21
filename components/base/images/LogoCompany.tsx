"use client";

import Image from "next/image";
import { JSX } from "react";
import { LogoCompanyUI } from "./interface";

const LOGO_IMAGE_LIGHT = "/images/dalog_logo_color.svg";
const LOGO_IMAGE_DARK = "/images/dalog_logo_dark.svg";

export function LogoCompany({
  description,
  theme,
}: LogoCompanyUI): JSX.Element {
  const logoSrc = theme === "theme/light" ? LOGO_IMAGE_LIGHT : LOGO_IMAGE_DARK;

  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <Image
          src={logoSrc}
          alt={description || " | DALOG"}
          width={189}
          height={38}
          priority
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}
