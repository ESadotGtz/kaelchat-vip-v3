
// Simple rotation across pages using localStorage index
const signatures = [
  "— K. Laurent",
  "— Kael L.",
  "— K. L. (I)",
  "— K. L. (II)",
  "— Kael Laurent — Con elegancia"
];
function nextSignature(){
  const k = 'kael_sig_idx';
  let i = parseInt(localStorage.getItem(k) || '0', 10);
  const sig = signatures[i % signatures.length];
  localStorage.setItem(k, ((i+1) % signatures.length).toString());
  return sig;
}
