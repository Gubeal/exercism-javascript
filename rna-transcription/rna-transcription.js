//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (cord) => {
  let rna = '';
  for(let nucleotide of cord){
    if (nucleotide === 'G') rna += 'C';
    if (nucleotide === 'C') rna += 'G';
    if (nucleotide === 'T') rna += 'A';
    if (nucleotide === 'A') rna += 'U';
  }
  return rna;
};
