export type TextType = 'highlight' | 'title' | 'paragraph' | 'description';

export interface VTextProps {
  type?: TextType;
  class?: string;
  [key:string]: unknown; //permite outros atributos html
}
