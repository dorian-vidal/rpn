export function evalrpn(s): Number | string {
  var st, tk, i, x, y, z;
  s = s.replace(/^\s*|\s*$/g, "");
  s = s.length > 0 ? s.split(/\s+/) : [];
  st = [];
  for (i = 0; i < s.length; ++i) {
    tk = s[i];
    if (/^[+-]?(\.\d+|\d+(\.\d*)?)$/.test(tk) && tk < 0) {
      return "test failed";
    }
    if (/^[+-]?(\.\d+|\d+(\.\d*)?)$/.test(tk)) z = Number(tk);
    else if (tk == "NEGATE") {
      y = st.pop();
      z = eval("-1 * " + y);
    } else {
      if (tk.length > 1 || "+-*/".indexOf(tk) == -1 || st.length < 2) break;
      y = st.pop();
      x = st.pop();
      z = eval(x + tk + " " + y);
    }
    st.push(z);
  }
  return i < s.length || st.length > 1 ? "error" : st.length == 1 ? st.pop() : "";
}
