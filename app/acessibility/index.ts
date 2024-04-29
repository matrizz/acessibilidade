// to be implemented


const TextSizes = [
  "text-xs",
  "text-sm",
  "text-md",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
];

export const IncreaseTextFont = (i: number) => {
  const text = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6")
  text.forEach((item) => {
    item.classList.add(i >= TextSizes.length ? TextSizes[i] : TextSizes[i+1])
  })
}

export const DecreaseTextFont = (i: number) => {
  const text = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6")
  text.forEach((item) => {
    item.classList.remove(i <= 0 ? TextSizes[0] : TextSizes[i-1])
  })
}
