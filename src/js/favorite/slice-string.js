export const cutString = (text, sliceCut) => {
  if (text.length <= sliceCut) {
      return text
  } else {
      return `${text.slice(0,sliceCut)}...`
  }
}