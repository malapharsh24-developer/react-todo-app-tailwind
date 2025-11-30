export default function Capitalize (str) {
    str = str.trim();
    let first_letter = str.charAt(0).toUpperCase();
    let remaining_str = str.slice(1);
    return first_letter + remaining_str;
}