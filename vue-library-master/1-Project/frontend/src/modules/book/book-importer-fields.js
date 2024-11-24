import { BookModel } from '@/modules/book/book-model';

const { fields } = BookModel;

export default [
  fields.callNumber, 
  fields.title,
  fields.author,
  fields.edition,
  fields.publisher,
  fields.copyright,
  fields.accession_number,
  fields.numberOfCopies,
  fields.stock,
  fields.images,
  fields.status,
];
