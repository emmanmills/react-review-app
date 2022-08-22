import moment from "moment";

export function truncateStr(str, max = 300) {
  if (!str?.length) return str;

  const maxChar = max;
  if (str.length > maxChar) {
    return `${str.slice(0, maxChar)}...`;
  }
  return str;
}

export function getFormattedDateString(dateStr) {
  return moment(new Date(dateStr)).format("L");
}
