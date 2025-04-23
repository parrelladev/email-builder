// Exportação da função de renderização
import renderToStaticMarkup from './renderers/renderToStaticMarkup';
export { renderToStaticMarkup };

// Exportações da lógica do Reader
export {
  Reader,
  ReaderBlockSchema,
  ReaderBlock,
  ReaderDocumentSchema
} from './Reader/core';

export type {
  TReaderBlock,
  TReaderDocument,
  TReaderBlockProps,
  TReaderProps
} from './Reader/core';