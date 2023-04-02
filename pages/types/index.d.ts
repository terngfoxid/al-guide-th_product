export {};

declare global {
  interface Window {
    gtag(config:string,tag:string,{page_path: url}:{page_path : string})
  }
}