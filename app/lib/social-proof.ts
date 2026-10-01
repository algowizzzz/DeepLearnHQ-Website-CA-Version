/* The one place the social-proof numbers live. These describe Saad's
   overall teaching audience (Udemy + bootcamp), never a single course —
   so the wording is always "learners taught", never "students in this
   course". Change a number here and every page follows.

   Known, out of scope: the legacy static pages under public/learning*.html
   and ~15 blog posts still carry older, conflicting sets. */
export const SOCIAL_PROOF = {
  learners: 40000,
  reviews: 13000,
  rating: 4.5,
  countries: 120,
} as const;

export const SP = {
  learners: "40K+",
  reviews: "13K+",
  rating: "4.5★",
  countries: "120+",
  line: "40K+ learners taught · 13K+ reviews · 4.5★",
  lineLong: "40K+ learners taught · 13K+ reviews · 4.5★ average rating · 120+ countries",
} as const;
