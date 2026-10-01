// [ISO 3166-1 alpha-2, name, dial code]. Pinned first per Saad's request,
// then the rest alphabetically by name. Flag emoji is derived from the ISO
// code (regional-indicator trick) rather than hand-typed per row.
export type Country = [string, string, string];

export const PINNED: Country[] = [
  ["US", "United States", "+1"],
  ["CA", "Canada", "+1"],
  ["IN", "India", "+91"],
  ["GB", "United Kingdom", "+44"],
];

export const COUNTRIES: Country[] = [
  ["AF", "Afghanistan", "+93"], ["AL", "Albania", "+355"], ["DZ", "Algeria", "+213"],
  ["AR", "Argentina", "+54"], ["AU", "Australia", "+61"], ["AT", "Austria", "+43"],
  ["BH", "Bahrain", "+973"], ["BD", "Bangladesh", "+880"], ["BE", "Belgium", "+32"],
  ["BR", "Brazil", "+55"], ["BG", "Bulgaria", "+359"], ["KH", "Cambodia", "+855"],
  ["CL", "Chile", "+56"], ["CN", "China", "+86"], ["CO", "Colombia", "+57"],
  ["HR", "Croatia", "+385"], ["CZ", "Czech Republic", "+420"], ["DK", "Denmark", "+45"],
  ["EG", "Egypt", "+20"], ["EE", "Estonia", "+372"], ["FI", "Finland", "+358"],
  ["FR", "France", "+33"], ["DE", "Germany", "+49"], ["GH", "Ghana", "+233"],
  ["GR", "Greece", "+30"], ["HK", "Hong Kong", "+852"], ["HU", "Hungary", "+36"],
  ["IS", "Iceland", "+354"], ["ID", "Indonesia", "+62"], ["IR", "Iran", "+98"],
  ["IQ", "Iraq", "+964"], ["IE", "Ireland", "+353"], ["IL", "Israel", "+972"],
  ["IT", "Italy", "+39"], ["JP", "Japan", "+81"], ["JO", "Jordan", "+962"],
  ["KE", "Kenya", "+254"], ["KW", "Kuwait", "+965"], ["LV", "Latvia", "+371"],
  ["LB", "Lebanon", "+961"], ["LT", "Lithuania", "+370"], ["LU", "Luxembourg", "+352"],
  ["MY", "Malaysia", "+60"], ["MT", "Malta", "+356"], ["MX", "Mexico", "+52"],
  ["MA", "Morocco", "+212"], ["NP", "Nepal", "+977"], ["NL", "Netherlands", "+31"],
  ["NZ", "New Zealand", "+64"], ["NG", "Nigeria", "+234"], ["NO", "Norway", "+47"],
  ["OM", "Oman", "+968"], ["PK", "Pakistan", "+92"], ["PA", "Panama", "+507"],
  ["PE", "Peru", "+51"], ["PH", "Philippines", "+63"], ["PL", "Poland", "+48"],
  ["PT", "Portugal", "+351"], ["QA", "Qatar", "+974"], ["RO", "Romania", "+40"],
  ["RU", "Russia", "+7"], ["SA", "Saudi Arabia", "+966"], ["RS", "Serbia", "+381"],
  ["SG", "Singapore", "+65"], ["SK", "Slovakia", "+421"], ["SI", "Slovenia", "+386"],
  ["ZA", "South Africa", "+27"], ["KR", "South Korea", "+82"], ["ES", "Spain", "+34"],
  ["LK", "Sri Lanka", "+94"], ["SE", "Sweden", "+46"], ["CH", "Switzerland", "+41"],
  ["TW", "Taiwan", "+886"], ["TZ", "Tanzania", "+255"], ["TH", "Thailand", "+66"],
  ["TR", "Turkey", "+90"], ["UA", "Ukraine", "+380"], ["AE", "United Arab Emirates", "+971"],
  ["UY", "Uruguay", "+598"], ["VE", "Venezuela", "+58"], ["VN", "Vietnam", "+84"],
];

export function flag(iso: string): string {
  return iso.replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}
