"use client";

import { useEffect } from "react";
import { captureTouch, getLeadId } from "../../lib/attribution";
import { track } from "../../lib/track";

/* Page-load side effects for /free-course, kept out of the server page:
   record the touch (first/last), persist a ?lid= from an email link, and
   fire free_lp_view. Renders nothing. */
export default function FreeLpView() {
  useEffect(() => {
    captureTouch();
    getLeadId();
    track("free_lp_view", {});
  }, []);
  return null;
}
