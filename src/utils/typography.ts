// Vietnamese compounds are written as separate syllables, so browsers happily
// break "thương hiệu" across two lines. Join known compounds (and a number with
// the word after it) with non-breaking spaces for headings.
const COMPOUNDS = [
  'thương hiệu', 'thiết bị', 'gia dụng', 'gia đình', 'gia công', 'sản phẩm', 'an toàn',
  'không gian', 'thông thường', 'chất lượng', 'chỉ số', 'hiện đại', 'sẵn sàng', 'chế tác',
  'minh bạch', 'hợp tác', 'quy trình', 'dễ dàng', 'tiêu chuẩn', 'chuẩn mực', 'của bạn',
  'sở hữu', 'thông minh', 'tinh tế',
];

const NBSP = ' ';
const compoundPattern = new RegExp(COMPOUNDS.join('|'), 'gi');

export const vn = (text: string): string =>
  text
    .replace(compoundPattern, (match) => match.replace(/ /g, NBSP))
    // keep numbers with their unit/noun: "6 bước", "49 chỉ số"
    .replace(/(\d) /g, `$1${NBSP}`);
