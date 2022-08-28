export function isAscii(str) {
  return /^[\x40-\x7A]*$/.test(str);
}

export function countLatin(str) {
  try {
    return str.split("").filter(isAscii).length;
  } catch (e) {
    return str;
  }
}

const engToPerMap = "۰۱۲۳۴۵۶۷۸۹";
export function engToPerDigits(str) {
  try {
    return str
      .toString()
      .replace(/[0-9]/g, (match) => engToPerMap[parseInt(match)]);
  } catch (e) {
    return str;
  }
}

const perToEngMap = {
  "۰": "0",
  "٠": "0",
  "۱": "1",
  "١": "1",
  "۲": "2",
  "٢": "2",
  "۳": "3",
  "٣": "3",
  "۴": "4",
  "٤": "4",
  "۵": "5",
  "٥": "5",
  "۶": "6",
  "٦": "6",
  "۷": "7",
  "٧": "7",
  "۸": "8",
  "٨": "8",
  "۹": "9",
  "٩": "9",
};
export function perToEngDigits(str) {
  try {
    return str
      .toString()
      .replace(/[\u0660-\u0669\u06F0-\u06F9]/g, (match) => perToEngMap[match]);
  } catch (e) {
    return str;
  }
}

export function digitsOnly(str) {
  try {
    return str
      .toString()
      .replace(/(?!([\u0660-\u0669]|[\u06F0-\u06F9]|[0-9]))./g, "");
  } catch (e) {
    return str;
  }
}

export function persianize(el) {
  if (typeof el === "undefined") {
    return;
  }
  if (el.nodeType === el.TEXT_NODE) {
    const list = el.data.match(/[0-9]/g);
    if (
      list != null &&
      typeof list !== "undefined" &&
      list.length !== 0 &&
      countLatin(el.data) < 5
    ) {
      for (let i = 0; i < list.length; i++) {
        el.data = el.data.replace(list[i], engToPerMap[list[i]]);
      }
    }
  }
  for (
    let j = 0;
    typeof el.childNodes !== "undefined" && j < el.childNodes.length;
    j++
  ) {
    if (el.classList.contains("ignore-persian")) {
      continue;
    }
    persianize(el.childNodes[j]);
  }
}

export function numberHumanize(num) {
  try {
    const humanize = num
      .toString()
      .replace(/[^-\d.]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (humanize.length < num.toString().length) {
      return num;
    }
    return humanize;
  } catch (err) {
    return num;
  }
}

export function persianNumberHumanize(num) {
  return engToPerDigits(numberHumanize(num));
}
