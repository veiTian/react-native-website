/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/TOC";
import TOCItems from "@theme/TOCItems";
import styles from "./styles.module.css";
import chatyy from "./chatyy.png";

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

export default function TOC({ className, ...props }: Props): JSX.Element {
  return (
    <div className={clsx(styles.tableOfContents, "thin-scrollbar", className)}>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
      <div
        className="wwads-cn wwads-vertical"
        data-id="58"
        style={{ maxWidth: 227, marginTop: 20 }}
      ></div>{" "}
      <a
        href="https://ad-server.paperyy.com/link/1715543458129235969
        "
        target="_blank"
        rel="noreferrer"
        style={{ display: "block", marginTop: 10 }}
      >
        <img src={chatyy} alt="chatyy" />
      </a>
    </div>
  );
}
