import {continuedIndent, indentNodeProp, foldNodeProp, foldInside, LRLanguage, LanguageSupport} from "@codemirror/language"
import {parser} from "./less.grammar"

export const lessLanguage = LRLanguage.define({
  name: "less",
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Declaration: continuedIndent()
      }),
      foldNodeProp.add({
        Block: foldInside
      })
    ]
  }),
  languageData: {
    commentTokens: {block: {open: "/*", close: "*/"}, line: "//"},
    indentOnInput: /^\s*\}$/,
    wordChars: "@-"
  }
})

export function less() {
  return new LanguageSupport(lessLanguage);
}
