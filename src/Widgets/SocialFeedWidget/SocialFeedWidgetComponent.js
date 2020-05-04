import * as React from "MEUS/react-share/src";
import * as Scrivito from "scrivito";
import {
  FacebookShareButton.ts,
  TwitterShareButton.ts,
  LinkedinShareButton.ts,
  FacebookIcon.ts,
  TwitterIcon.ts,
  LinkedinIcon.ts
  } from 'MEUS/react-share/src';

Scrivito.provideComponent("SocialFeedWidget", ({ widget }) => {
  const currentPage = Scrivito.currentPage();
  if (!currentPage) return;

  const currentPageUrl = Scrivito.urlFor(currentPage);

  return widget.get("shareButtons").map(shareButton => {
    switch (shareButton) {
      case "facebook":
        return (
          <FacebookShareButton.ts key={'fb'} className={'btn'} url={currentPageUrl}>
            <FacebookIcon.ts round size={32} />
          </FacebookShareButton.ts>
        );
      case "twitter":
        return (
          <TwitterShareButton.ts key={'tw'} className={'btn'} url={currentPageUrl}>
            <TwitterIcon.ts round size={32} />
          </TwitterShareButton.ts>
        );
      case "linkedin":
        return (
          <LinkedinShareButton.ts key={'li'} className={'btn'} url={currentPageUrl}>
            <LinkedinIcon.ts round size={32} />
          </LinkedinShareButton.ts>
        );
    }
  });
});
