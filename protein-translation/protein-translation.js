const NUCLEOTIDE_SIZE = 3;
const stopCodons = new Set(['UAA', 'UAG', 'UGA']);
const toProtein = new Map([
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'],
  ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'],
  ['UUG', 'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'],
  ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
]);

function splitNucleotides(rna=''){
  let piece = rna;
  let nuclei = [];

  for (let i = 0; i < (rna.length / NUCLEOTIDE_SIZE); i++){
    nuclei.push(piece.slice(0, NUCLEOTIDE_SIZE));
    piece = piece.slice(NUCLEOTIDE_SIZE, piece.length);
  }
  return nuclei;
};

export const translate = (rna='') => {
  let proteins = [];
  let nuclei = splitNucleotides(rna);
  
  for (let nucle of nuclei){
    if (stopCodons.has(nucle)) break;
    if (!toProtein.has(nucle)) throw new Error('Invalid codon');
    proteins.push(toProtein.get(nucle));
  }
  return proteins;
};
